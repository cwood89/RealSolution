
/*Creat rent_find Table*/

DROP TABLE if EXISTS atl_db.rent_find;
CREATE TABLE atl_db.rent_find
SELECT newlisting.fmls AS subject, newlisting.sub as subject_sub, newlisting.B as bedrooms, newlisting.SQFT as size, newlisting.Y as year_build, 
	   rental.fmls as comp_fmls, rental.B as comp_B, rental.sqft as comp_size,rental.Year as comp_year ,rental.price as rental, 
       round(rental.price/rental.sqft,2) as psf, rental.sqft - newlisting.sqft as size_diff, `Days On Market` as comp_DOM
FROM atl_db.newlisting
join atl_db.rental on ( upper(rental.sub) LIKE CONCAT('%', upper(newlisting.sub), '%') or upper(newlisting.sub) LIKE CONCAT('%', upper(rental.sub), '%') )and newlisting.zip = rental.zip
where newlisting.sub not in ('n/a','None','na') and ( newlisting.sqft < 1.1*rental.sqft ) and newlisting.Y >= rental.YEAR - 10 and rental.sqft != 0
ORDER BY newlisting.fmls, size_diff;




/*Creat rent_est Table, a table contains unique subject with estimated rental*/
DROP TABLE if EXISTS atl_db.rent_est;
CREATE TABLE atl_db.rent_est

WITH min_size as (
SELECT subject, subject_sub, bedrooms, size, year_build, size * psf as est_rent, rental as comp_rental
FROM atl_db.rent_find
WHERE size_diff in (SELECT MIN(size_diff) FROM atl_db.rent_find GROUP BY subject)
)

SELECT subject, subject_sub, bedrooms, size, year_build,est_rent, comp_rental
FROM min_size
WHERE est_rent IN ( SELECT max(est_rent) FROM min_size GROUP BY subject);


/*Creat subject_find Table, a table contains unique subject matching with rental comps*/
DROP TABLE if EXISTS atl_db.subject_find;
CREATE TABLE atl_db.subject_find
SELECT newlisting.* , rent_est.est_rent, rent_est.comp_rental 
from atl_db.newlisting join atl_db.rent_est on newlisting.FMLS = rent_est.subject 