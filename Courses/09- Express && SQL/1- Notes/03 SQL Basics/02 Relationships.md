# What is a `FOREIGN KEY`?
Recall that a `PRIMARY KEY` is a column which holds unique values, it's a way to identify each row in a table 

To relate one table to another, a`FOREIGN KEY` column is included which is associated with - or reference the `PRIMARY KEY` in another table.

# Relations 
## One-to-one
The simplest relationship is one-to-one. This means one row in table A references one and only one row in table B.

## One-to-Many Relationships
The **one-to-many** relationship is where each row in one table can be referenced one time by any number of rows in another table.

For example, "Each person has many jobs" is the one-to-many relationship shown in the `people` and `jobs` tables above.

### **4. Schema (the blueprint of tables)**
#### Students Table
```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);
```
- id: unique identifier for each student.
- PRIMARY KEY: makes sure every student has a unique id. 
#### Juice_boxes Table
```sql
CREATE TABLE juice_boxes (
  id INTEGER PRIMARY KEY,
  juice TEXT,
  date TEXT,
  student_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

- id: unique identifier for each juice box.
- student_id: links this juice box to the students table.
- FOREIGN KEY (student_id) REFERENCES students(id) → this creates the one-to-many relationship:
- It tells the database:
        "The value inside student_id must come from the id column in students."
- This enforces referential integrity (you can’t assign a juice box to a student who doesn’t exist).
### Schemas Diagram
```pssql
students                juice_boxes
---------               -------------------
id (PK)   <--------+    id (PK)
name                |   juice
                    |   date
                    +-- student_id (FK)

```
## Many-to-many

The many-to-many relationship is where each row in one table can be referenced by many rows in another table, and vice versa.

For example, consider people reading books.

- Each person can read multiple books.
- Each book can be read by multiple people.

The way to connect two tables in a many-to-many relationship is using a third table called a **join table**. This special kind of table stores a foreign key for the primary key from each of the tables that need to be connected.

### **3. How to Represent It in a Database**

👉 Problem:  
If you only create a `students` table and a `subjects` table, you cannot directly connect them because:

- Putting a `subject_id` inside `students` would only allow **one subject per student**.
    
- Putting a `student_id` inside `subjects` would only allow **one student per subject**.
    

That won’t work, because we need **many-to-many**.

👉 Solution:  
We add a **third table**, called a **join table** (or linking/bridge table).

- This table’s job is **only to connect the two main tables**.
    
- It contains **foreign keys** from both tables.


### **6. The Schema**

Let’s look at the SQL definitions:

#### Students Table
```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);

```
- Each student has a unique `id`.
    
#### Subjects Table
```sql
CREATE TABLE subjects (
  id INTEGER PRIMARY KEY,
  name TEXT
);

```

- Each subject has a unique `id`.
#### Join Table (student_subject)
```sql
CREATE TABLE student_subject (
  student_id INTEGER,
  subject_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

```
- `student_id` → foreign key pointing to `students(id)`
    
- `subject_id` → foreign key pointing to `subjects(id)`
    
- Together, `(student_id, subject_id)` forms the connection.
    

👉 Note:  
The join table **doesn’t need its own primary key**, because its only job is to connect students ↔ subjects.  
But in practice, many developers will define a **composite primary key**:

```sql
PRIMARY KEY (student_id, subject_id)
```
### **7. Schema Diagram**

Visually:
```pssql
students                  student_subject                  subjects
---------                 -----------------                ---------
id (PK)   <---------+     student_id (FK)  +--------->     id (PK)
name                 |     subject_id (FK) |                name
                     +---------------------+

```


# Many-to-Many Database Design
In a many-to-many relationship, multiple records in Table A are associated with multiple records in Table B. You would normally create a third table for this relationship called a _**join table**_, which contains the primary keys from both tables.

A _**join table**_ table is a table that sits between the other tables in a many-to-many relationship. It stores a record of each of the foreign keys of the other tables. Which is used to reference the data from the other tables. Overall, a _**join table**_ provides a more developed data structure.

![[Pasted image 20250824110922.png]]
The above schema depicts a many-to-many relationship between the `products` table and the `orders` table. A single order can have multiple products, and a single product can belong to multiple orders. We created a third join table called `order_details`, which contains both the `order_id` and `product_id` fields as foreign keys. The foreign keys in the `order_details` table (`product_id` and `order_id`) reference the primary keys in the `products` table (`id`) and the `orders` table (`id`). This allows your database to make multiple connections between seperate data tables.

# Relational Database Design Stages
There are four generally agreed-upon stages of Relational Database Design:
1. Define the purpose/ entities of the relational DB
2. Identify primary Keys
3. Establish table relationships 
4. Apply normalization rules
## 1. Define the purpose and entities 
The First stage is identifying the purpose of the database(Why is the database being created? What problem is it solving ? What is the data used for? ), as well as identifying the main entities, or tables, that need to be created, It also typically involves identifying the tables's attributes (Columns and rows)

For example, if you were creating a database for order processing on an e-commerce application, you would need a database with at least three tables: a `products` table, an `orders` tables, and a `users` (i.e. customers) table. You can reason that a product will probably have an ID, name, and price, and an order will contain one or more product IDs. Also, each user can place multiple orders.

![[Pasted image 20250824115330.png]]
## 2. Identify primary keys

The second stage is to identify the primary key (_PK_) of each table. As we previously learned, a table’s primary key contains a unique value or values, that identifies each distinct record. For our above example of online orders, we would probably create IDs to serve as the primary key for each table: a product ID, an order ID, and a user ID.

![orders-erd-primary-keys.svg](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/orders-erd-primary-keys.svg)
## 3. Establish table relationships

**One-to-many relationship**

In a one-to-many relationship, each record in Table A is associated with multiple records in Table B. Each record in Table B is associated with only one record in Table A. This is achieved by utilizing the primary key and foreign key. The foreign key in Table B references the primary key of Table A.

![orders-erd-one-to-many.svg](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/orders-erd-one-to-many.svg)
The above schema depicts a one-to-many relationship between the `users` table and the `orders` table: **One user can create multiple orders**.

The primary key of the `users` table (`id`) is a foreign key in the `orders` table (`purchaser_id`). This allows the foreign key (`purchaser_id`) in the `orders` table to reference the `users` table (`id`) to identify which user made each order.

## 4. Apply normalization rules

The fourth stage in RDD is _**normalization**_. Normalization is the process of optimizing the database structure so that redundancy and confusion are eliminated.

The rules of normalization are called “normal forms” and are as follows:

1. First normal form
2. Second normal form
3. Third normal form
4. Boyce-Codd normal form
5. Fifth normal form

The first three forms are widely used in practice, while the fourth and fifth are less often used.

### **First normal form rules:**

- Eliminate repeating groups in individual tables.
- Create a separate table for each set of related data.
- Identify each set of related data with a primary key.

### **Second normal form rules:**

- Create separate tables for sets of values that apply to multiple records.
- Relate these tables with a foreign key.

### **Third normal form rules:**

- Eliminate fields that do not depend on the table’s key.


# Visualizing Relational Database Schemas
