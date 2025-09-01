-- Drop existing tables (order matters because of FKs)
DROP TABLE IF EXISTS party_attendance;
DROP TABLE IF EXISTS parties;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS relationships;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

-- Departments
CREATE TABLE departments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- Employees
CREATE TABLE employees (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   first_name TEXT NOT NULL CHECK (length(first_name) <= 40),
   last_name  TEXT NOT NULL CHECK (length(last_name) <= 40),
   role TEXT,
   department_id INTEGER NOT NULL,
   FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Relationships (self-referencing many-to-many)
CREATE TABLE relationships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id_1 INTEGER NOT NULL,
  employee_id_2 INTEGER NOT NULL,
  type TEXT,
  FOREIGN KEY (employee_id_1) REFERENCES employees(id),
  FOREIGN KEY (employee_id_2) REFERENCES employees(id)
);

-- Performance Reviews
CREATE TABLE performance_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id INTEGER NOT NULL,
  score REAL NOT NULL CHECK (score >= 0 AND score <= 10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Parties
CREATE TABLE parties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  budget DECIMAL(10,2),
  type TEXT CHECK (type IN ('onsite', 'offsite'))
);

-- Party Attendance (join table)
CREATE TABLE party_attendance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  party_id INTEGER NOT NULL,
  employee_id INTEGER NOT NULL,
  FOREIGN KEY (party_id) REFERENCES parties(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);


-- ================================================================================================================

