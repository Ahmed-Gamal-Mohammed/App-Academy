# # CREATE Related Tables
Now, it's time to look at how to create tables that have relationships with other tables.
## One-to-many
Imagine two tables - `puppies` and `owners`. Each puppy is owned by one person. Each person can own multiple puppies.

To set up the `puppies` table to have a relationship with another table, there should be a primary key column and at least one foreign key column. In this example, the foreign key will connect to the primary key in the `owners` table for which each puppy has an owner

The resulting `CREATE` statement should look like the following:
```sql
CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN DEFAULT 0,
  owner_id INTEGER FOREIGN KEY
);
```

The `owner_id` column should refer to a corresponding id-type column in the `owners` table.

```sql
CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
```
## Many-to-many (join table)
Next, imagine people are adopting elephants at the zoo to help with their care and feeding. Each elephant needs a lot of support, so multiple people will need to help each elephant. Additionally, each person could choose to help multiple elephants.

The `people` and `elephants` table are "basic" data tables.
```sql
CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
```

```sql
CREATE TABLE elephants (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  age INTEGER
);
```
Notice that both tables have **primary keys**, and neither has **foreign keys**. Instead, the foreign keys will go together into a **join table**.

```sql
CREATE TABLE people_elephants (
  person_id INTEGER  NOT NULL,
  elephant_id INTEGER NOT NULL;
  
  FOREIGN KEY (person_id) REFERENCES people(id),
  FOREIGN KEY (elephant_id) REFERENCES elephants(id)
);
```
# Delete dependent data with DELETE CASCADE

## 🔹 1. What is `ON DELETE CASCADE`?

- When you create a **foreign key relationship** between two tables, you link rows in one table (the **child**) to rows in another (the **parent**).
    
- By default, if you delete a row in the parent table, the database **prevents deletion** if child rows exist (to avoid “orphaned” data).
    
- If you use **`ON DELETE CASCADE`**, the database will **automatically delete all matching child rows** when the parent row is deleted.
## 🔹 2. Example with Employees and Reviews

### Tables without `ON DELETE CASCADE`:
```sql
CREATE TABLE Employee (
  Employee_ID INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT
);

CREATE TABLE Review (
  Employee_ID INTEGER,
  review INTEGER,
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID)
);

```
### Sample Data:

**Employee:**

|name|Employee_ID|department|
|---|---|---|
|Cooper|1|Accounting|
|Indie|2|HR|
|Kota|3|Project Manager|
**Review:**

|Employee_ID|review|
|---|---|
|1|2020|
|1|2021|
|2|2021|
|3|2021|
### ❌ Problem (without CASCADE):

If you try:
```sql
DELETE FROM Employee WHERE Employee_ID = 1;
```
You’ll get an **error** like:
```sql
FOREIGN KEY constraint failed
```
Because reviews for Employee `1` still exist in the `Review` table.

## 🔹 3. Solution: Use `ON DELETE CASCADE`

We recreate the `Review` table like this:
```sql
DROP TABLE Review;

CREATE TABLE Review (
  Employee_ID INTEGER,
  review INTEGER,
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID) ON DELETE CASCADE
);

```
Now the relationship says:  
👉 “If an employee is deleted, automatically delete their reviews too.”

---
## 4. How it works in practice

If we run:
```sql
DELETE FROM Employee WHERE Employee_ID = 1;
```
Then:

- Cooper is removed from the `Employee` table.
    
- All rows in `Review` with `Employee_ID = 1` are also removed automatically.
---
### ✅ Resulting tables:

**Employee:**

| name  | Employee_ID | department      |
| ----- | ----------- | --------------- |
| Indie | 2           | HR              |
| Kota  | 3           | Project Manager |
**Review:**

| Employee_ID | review |
| ----------- | ------ |
| 2           | 2021   |
| 3           | 2021   |
## 🔹 5. Why this is useful?

- Saves time → You don’t have to manually delete from child tables.
    
- Prevents errors → Ensures no “orphaned” rows are left.
    
- Keeps data consistent.

# Combine Tables Using JOIN
## 🔹 1. What is a JOIN?

A **JOIN** is a way to combine rows from two (or more) tables based on a relationship between them.

- That relationship usually comes from a **foreign key** (a column in one table pointing to the primary key in another).
- Example: `puppies.owner_id` points to `owners.id`.    
---
## 1. Why do we need JOINs?

Imagine you have **two tables**:

- One with puppies 🐶
    
- One with owners 👩‍🦰👨‍🦱
    

But the puppies table doesn’t store the full owner info, only an `owner_id`.  
That `owner_id` tells us which owner a puppy belongs to — but if you want the **puppy’s name + the owner’s name in one result**, you need to **connect the two tables**.

That’s exactly what a **JOIN** does.

## 2. Tables example

### puppies table
| id  | name   | age_yrs | owner_id |
| --- | ------ | ------- | -------- |
| 1   | Cooper | 1.0     | 1        |
| 2   | Indie  | 0.5     | 2        |
| 3   | Kota   | 0.7     | 5        |
### owners table

| id  | first_name | last_name |
| --- | ---------- | --------- |
| 1   | Jamie      | Anderson  |
| 2   | Linda      | Long      |
| 5   | Laney      | Rous      |
## 3. INNER JOIN (default JOIN)

👉 Only gives rows where **the puppy has an owner**.
```sql
SELECT puppies.name, owners.first_name
FROM puppies
JOIN owners
  ON puppies.owner_id = owners.id;

```
✅ Result:

|puppy_name|owner_first|
|---|---|
|Cooper|Jamie|
|Indie|Linda|
|Kota|Laney|
Notice: All three puppies matched because their `owner_id` exists in `owners`.

## 4. LEFT JOIN

👉 Show **all puppies**, even if some don’t have owners.  
If there’s no owner, the owner columns will be `NULL`.
```sql
SELECT puppies.name, owners.first_name
FROM puppies
LEFT JOIN owners
  ON puppies.owner_id = owners.id;

```
✅ Result:

|puppy_name|owner_first|
|---|---|
|Cooper|Jamie|
|Indie|Linda|
|Kota|Laney|
|Zoe|NULL|
## 5. RIGHT JOIN

👉 Opposite of LEFT JOIN. Show **all owners**, even if they don’t own a puppy.  
Not all databases support RIGHT JOIN (SQLite doesn’t).
```sql
SELECT puppies.name, owners.first_name
FROM puppies
RIGHT JOIN owners
  ON puppies.owner_id = owners.id;

```
✅ Result:

|puppy_name|owner_first|
|---|---|
|Cooper|Jamie|
|Indie|Linda|
|Kota|Laney|
|NULL|Alexander|

	