-- Step 1: SELECT the result of a joined table
-- This query joins musicians and instruments using the join table
-- and selects the musician's first name and the instrument type.

SELECT 
    musicians.first_name, 
    instruments.type
FROM musicians
JOIN musician_instruments
    ON musicians.id = musician_instruments.musician_id
JOIN instruments
    ON instruments.id = musician_instruments.instrument_id;
    
