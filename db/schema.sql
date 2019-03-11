/*Creat atl_db.sale*/
DROP table IF EXISTS atl_db.sale;
Create TABLE atl_db.sale
SELECT FMLS,Address,City,County,`Zip Code` as Zip, `Subdivision/Complex` as Sub, `Year Built` as Year, `Total Bedrooms` as B, `Total Full Baths` as B_F, `Total Half Baths` as B_H, `Square Footage` as sqft, Price, `Days On Market` as DOM, `Close Date` as CloseDate
FROM atl_db.altmarket_raw
Where `Square Footage` != 0
order by County, City, Sub, sqft; 

DROP table IF EXISTS atl_db.rental;
Create TABLE atl_db.rental
SELECT `FMLS#` as FMLS,Address,City,County,`Zip Code` as Zip, `Subdivision/Complex` as Sub, `Year Built` as Year, `Total Bedrooms` as B, `Total Full Baths` as B_F, `Total Half Baths` as B_H, `Square Footage` as sqft, Price, `Days On Market` as DOM, `Close Date` as CloseDate
FROM atl_db.altrent_raw
Where `Square Footage` != 0
order by County, City, Sub, sqft; 

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*Creat rent_finds Table*/

DROP TABLE if EXISTS atl_db.rent_finds;
CREATE TABLE atl_db.rent_finds
SELECT newlisting.fmls AS subject, newlisting.sub as subject_sub, newlisting.B as bedrooms, newlisting.SQFT as size, newlisting.Y as year_build, 
	   rental.fmls as comp_fmls, rental.Address as comp_address, rental.B as comp_B, rental.sqft as comp_size,rental.Year as comp_year ,rental.price as rental, 
       round(rental.price/rental.sqft,2) as psf, rental.sqft - newlisting.sqft as size_diff, rental.Dom as comp_DOM
FROM atl_db.newlisting
join atl_db.rental on ( upper(rental.sub) LIKE CONCAT('%', upper(newlisting.sub), '%') or upper(newlisting.sub) LIKE CONCAT('%', upper(rental.sub), '%') )and newlisting.zip = rental.zip
where newlisting.sub not in ('n/a','None','na') and ( newlisting.sqft < 1.1*rental.sqft ) and newlisting.Y >= rental.YEAR - 10 and rental.sqft != 0
ORDER BY newlisting.fmls, size_diff;


/*Creat rent_est Table, a table contains unique subject with estimated rental*/
DROP TABLE if EXISTS atl_db.rent_est;
CREATE TABLE atl_db.rent_est

WITH min_size as (
SELECT subject, subject_sub, bedrooms, size, year_build, size * psf as est_rent, rental as comp_rental
FROM atl_db.rent_finds
WHERE size_diff in (SELECT MIN(size_diff) FROM atl_db.rent_finds GROUP BY subject)
)

SELECT subject, subject_sub, bedrooms, size, year_build,est_rent, comp_rental
FROM min_size
WHERE est_rent IN ( SELECT max(est_rent) FROM min_size GROUP BY subject);

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*Creat sale_finds Table*/

DROP TABLE if EXISTS atl_db.sale_finds;
CREATE TABLE atl_db.sale_finds
SELECT newlisting.fmls AS subject, newlisting.sub as subject_sub, newlisting.B as bedrooms, newlisting.SQFT as size, newlisting.Y as year_build, 
	   sale.fmls as comp_fmls, sale.Address as comp_address, sale.B as comp_B, sale.sqft as comp_size,sale.Year as comp_year ,sale.price as market_value, 
       round(sale.price/sale.sqft,2) as psf, sale.sqft - newlisting.sqft as size_diff, sale.DOM as comp_DOM
FROM atl_db.newlisting
join atl_db.sale on ( upper(sale.sub) LIKE CONCAT('%', upper(newlisting.sub), '%') or upper(newlisting.sub) LIKE CONCAT('%', upper(sale.sub), '%') )and newlisting.zip = sale.zip
where newlisting.sub not in ('n/a','None','na') and ( newlisting.sqft < 1.1*sale.sqft ) and newlisting.Y >= sale.Year - 10 and sale.sqft != 0
ORDER BY newlisting.fmls, size_diff;

/*Creat rent_est Table, a table contains unique subject with estimated rental*/
DROP TABLE if EXISTS atl_db.sale_est;
CREATE TABLE atl_db.sale_est

WITH min_size as (
SELECT subject, subject_sub, bedrooms, size, year_build, size * psf as est_sale, market_value as comp_sale
FROM atl_db.sale_finds
WHERE size_diff in (SELECT MIN(size_diff) FROM atl_db.sale_finds GROUP BY subject)
)

SELECT subject, subject_sub, bedrooms, size, year_build,est_sale, comp_sale
FROM min_size
WHERE est_sale IN ( SELECT max(est_sale) FROM min_size GROUP BY subject);


/*Creat subject_find Table, a table contains unique subject matching with rental comps*/
DROP TABLE if EXISTS atl_db.subject_finds;
CREATE TABLE atl_db.subject_finds
SELECT newlisting.* , rent_est.est_rent, rent_est.comp_rental, sale_est.est_sale, sale_est.comp_sale
from atl_db.newlisting 
join atl_db.rent_est on newlisting.FMLS = rent_est.subject
join atl_db.sale_est on newlisting.FMLS = sale_est.subject;

ALTER TABLE atl_db.subject_finds
Add id int AUTO_INCREMENT Primary Key;
ALTER TABLE atl_db.subject_finds
Add createdAt  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE atl_db.subject_finds
Add updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

