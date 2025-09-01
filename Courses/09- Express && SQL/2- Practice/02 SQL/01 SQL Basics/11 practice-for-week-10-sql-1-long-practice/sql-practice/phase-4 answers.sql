-- Add employees (make sure their departments exist first)
INSERT INTO departments (name) VALUES 
  ('Management'),
  ('Sales'),
  ('Reception'),
  ('Product Oversight'),
  ('Accounting'),
  ('Warehouse');

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Michael', 'Scott', 'Regional Manager', (SELECT id FROM departments WHERE name='Management'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Dwight', 'Schrute', 'Assistant Regional Manager', (SELECT id FROM departments WHERE name='Sales'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Jim', 'Halpert', 'Sales Representative', (SELECT id FROM departments WHERE name='Sales'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Pam', 'Beesly', 'Receptionist', (SELECT id FROM departments WHERE name='Reception'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Kelly', 'Kapoor', 'Customer Service Representative', (SELECT id FROM departments WHERE name='Product Oversight'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Angela', 'Martin', 'Head of Accounting', (SELECT id FROM departments WHERE name='Accounting'));

INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Roy', 'Anderson', 'Warehouse Staff', (SELECT id FROM departments WHERE name='Warehouse'));

-- Roy Anderson + Pam Beesly romantic relationship
INSERT INTO relationships (employee_id_1, employee_id_2, type)
VALUES (
  (SELECT id FROM employees WHERE first_name='Roy' AND last_name='Anderson'),
  (SELECT id FROM employees WHERE first_name='Pam' AND last_name='Beesly'),
  'romantic'
);

-- Ryan Howard hired (Reception, Temp)
INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Ryan', 'Howard', 'Temp', (SELECT id FROM departments WHERE name='Reception'));

-- Onsite office party $100
INSERT INTO parties (budget, type) VALUES (100.00, 'onsite');

-- Performance reviews
INSERT INTO performance_reviews (employee_id, score)
VALUES ((SELECT id FROM employees WHERE first_name='Dwight' AND last_name='Schrute'), 3.3);

INSERT INTO performance_reviews (employee_id, score)
VALUES ((SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert'), 4.2);

-- Update reviews
UPDATE performance_reviews
SET score = 9.0
WHERE employee_id = (SELECT id FROM employees WHERE first_name='Dwight' AND last_name='Schrute');

UPDATE performance_reviews
SET score = 9.3
WHERE employee_id = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert');

-- Promotions
UPDATE employees
SET role = 'Assistant Regional Manager'
WHERE first_name='Jim' AND last_name='Halpert';

UPDATE employees
SET role = 'Sales Representative',
    department_id = (SELECT id FROM departments WHERE name='Sales')
WHERE first_name='Ryan' AND last_name='Howard';

-- Onsite party $200
INSERT INTO parties (budget, type) VALUES (200.00, 'onsite');

-- Angela + Dwight romantic relationship
INSERT INTO relationships (employee_id_1, employee_id_2, type)
VALUES (
  (SELECT id FROM employees WHERE first_name='Angela' AND last_name='Martin'),
  (SELECT id FROM employees WHERE first_name='Dwight' AND last_name='Schrute'),
  'romantic'
);

-- Angela performance review 6.2
INSERT INTO performance_reviews (employee_id, score)
VALUES ((SELECT id FROM employees WHERE first_name='Angela' AND last_name='Martin'), 6.2);

-- Ryan + Kelly romantic relationship
INSERT INTO relationships (employee_id_1, employee_id_2, type)
VALUES (
  (SELECT id FROM employees WHERE first_name='Ryan' AND last_name='Howard'),
  (SELECT id FROM employees WHERE first_name='Kelly' AND last_name='Kapoor'),
  'romantic'
);

-- Onsite party $50
INSERT INTO parties (budget, type) VALUES (50.00, 'onsite');

-- Jim leaves (delete relationships & reviews first, then employee)
DELETE FROM relationships
WHERE employee_id_1 = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert')
   OR employee_id_2 = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert');

DELETE FROM performance_reviews
WHERE employee_id = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert');

DELETE FROM employees
WHERE first_name='Jim' AND last_name='Halpert';

-- Roy + Pam break up
DELETE FROM relationships
WHERE (employee_id_1 = (SELECT id FROM employees WHERE first_name='Roy' AND last_name='Anderson')
   AND employee_id_2 = (SELECT id FROM employees WHERE first_name='Pam' AND last_name='Beesly'))
   OR (employee_id_1 = (SELECT id FROM employees WHERE first_name='Pam' AND last_name='Beesly')
   AND employee_id_2 = (SELECT id FROM employees WHERE first_name='Roy' AND last_name='Anderson'));

-- Pam performance review 7.6
INSERT INTO performance_reviews (employee_id, score)
VALUES ((SELECT id FROM employees WHERE first_name='Pam' AND last_name='Beesly'), 7.6);

-- Dwight another performance review 8.7
INSERT INTO performance_reviews (employee_id, score)
VALUES ((SELECT id FROM employees WHERE first_name='Dwight' AND last_name='Schrute'), 8.7);

-- Ryan quits (delete relationships & reviews, then employee)
DELETE FROM relationships
WHERE employee_id_1 = (SELECT id FROM employees WHERE first_name='Ryan' AND last_name='Howard')
   OR employee_id_2 = (SELECT id FROM employees WHERE first_name='Ryan' AND last_name='Howard');

DELETE FROM performance_reviews
WHERE employee_id = (SELECT id FROM employees WHERE first_name='Ryan' AND last_name='Howard');

DELETE FROM employees
WHERE first_name='Ryan' AND last_name='Howard';

-- Jim comes back
INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Jim', 'Halpert', 'Sales Representative', (SELECT id FROM departments WHERE name='Sales'));

-- Karen joins
INSERT INTO employees (first_name, last_name, role, department_id)
VALUES ('Karen', 'Filippelli', 'Sales Representative', (SELECT id FROM departments WHERE name='Sales'));

-- Karen + Jim romantic relationship
INSERT INTO relationships (employee_id_1, employee_id_2, type)
VALUES (
  (SELECT id FROM employees WHERE first_name='Karen' AND last_name='Filippelli'),
  (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert'),
  'romantic'
);

-- Onsite party $120
INSERT INTO parties (budget, type) VALUES (120.00, 'onsite');

-- Cancel last party & replace with offsite $300
DELETE FROM parties WHERE id = (SELECT MAX(id) FROM parties);
INSERT INTO parties (budget, type) VALUES (300.00, 'offsite');

-- Karen + Jim break up
DELETE FROM relationships
WHERE (employee_id_1 = (SELECT id FROM employees WHERE first_name='Karen' AND last_name='Filippelli')
   AND employee_id_2 = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert'))
   OR (employee_id_1 = (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert')
   AND employee_id_2 = (SELECT id FROM employees WHERE first_name='Karen' AND last_name='Filippelli'));

-- Pam + Jim romantic relationship
INSERT INTO relationships (employee_id_1, employee_id_2, type)
VALUES (
  (SELECT id FROM employees WHERE first_name='Pam' AND last_name='Beesly'),
  (SELECT id FROM employees WHERE first_name='Jim' AND last_name='Halpert'),
  'romantic'
);

