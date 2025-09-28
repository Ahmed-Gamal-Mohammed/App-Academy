-- Find the first owner that has a last name containing the lowercase letter "r"
-- Your code here

SELECT * FROM owners 
where last_name like "%r%"
ORDER By id
LIMIT 1;
