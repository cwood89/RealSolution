SELECT subject , count(*) as times FROM atl_db.rent_est
GROUP BY subject HAVING  times >1 ;


SELECT subject , count(*) as times FROM atl_db.sale_est
GROUP BY subject HAVING  times >1 ;

SELECT FMLS , count(*) as times FROM atl_db.subject_finds
GROUP BY FMLS HAVING  times >1 ;
