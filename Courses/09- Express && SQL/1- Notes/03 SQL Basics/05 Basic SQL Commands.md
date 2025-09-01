# CREATE/ DROP Tables
## Naming a table 
***Names of tables should be in snake_case and should not create spaces or dashes. They should contain only lower case letters, numbers, and underscores.***

- Good table names
    - student_grades
    - office_locations
    - people
- Bad (incorrect) table names
    - Student Grades
    - office-locations
    - person
## Writing the SQL
Creating a table with SQL has this general syntax:
```SQL
CREATE TABLE <<table name>> (
	<< column name >> << data type>>
	<< column name >> << data type>>
	<< column name >> << data type>>
	.... 
	
	<< column name >> << data type>>
)
```
### Example table

Here's the table that contains the column definitions for a `puppies` spreadsheet.

|Column|JS data type|Max length|ANSI SQL data type|
|---|---|---|---|
|name|string|50|VARCHAR(50)|
|age_yrs|number|3 digits, 1 decimal|NUMERIC(3,1)|
|breed|string|100|VARCHAR(100)|
|weight_lbs|number||INTEGER|
|microchipped|Boolean||BOOLEAN|

To write that as SQL, you would just put in the table name, column names, and data types in the syntax from above. You would get the following.
```sql
CREATE TABLE puppies (
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
```
### Primary key

...

| Column       | JS data type | Max length          | ANSI SQL data type  |
| ------------ | ------------ | ------------------- | ------------------- |
| id           | integer      |                     | INTEGER PRIMARY KEY |
| name         | string       | 50                  | VARCHAR(50)         |
| age_yrs      | number       | 3 digits, 1 decimal | NUMERIC(3,1)        |
| breed        | string       | 100                 | VARCHAR(100)        |
| weight_lbs   | number       |                     | INTEGER             |
| microchipped |              |                     |                     |
```sql
CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
```
### Not null

...
```sql
CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
```

## Dropping a table
To get rid of a table, simply execute the following SQL Command 
```sql
DROP TABLE <<table name>>;
```

Because table names must be unique, there's no need to specify the rest of the schema for SQL to know which table you're referring to 

# INSERT Data
## Example table set up

First, open up SQLite and create a new table named `friends` with the following column specifications:

|Name|Data type|Constraints|
|---|---|---|
|id|`INTEGER`|`PRIMARY KEY` `AUTOINCREMENT`|
|first_name|`VARCHAR(255)`|`NOT NULL`|
|last_name|`VARCHAR(255)`|`NOT NULL`|

Use the SQL below to create the table:
```sql
CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
```
## Inserting data into the example table
Now, you need to add table rows with some data. You can insert a new table row using the following syntax:

```sql
INSERT INTO table_name
VALUES
  (column1_value, column2_value, column3_value);
```

Fill out the `friends` table with information about five friends. In SQLite, enter the following to add new table rows.

```sql
INSERT INTO friends (id, first_name, last_name)
VALUES
  (1, 'Amy', 'Pond');
```
### Multiple values insert

You can also use the "multiple values" insert. This prevents you from having to write `INSERT` with every statement. Even better, if one fails, they all fail. That can help protect your data integrity.

```sql
INSERT INTO friends (first_name, last_name)
VALUES
  ('Rose', 'Tyler'),
  ('Martha', 'Jones'),
  ('Donna', 'Noble'),
  ('River', 'Song');
```
Use `SELECT * FROM friends;` to verify that there are rows in the `friends` table:

|`id`|`first_name`|`last_name`|
|---|---|---|
|1|Amy|Pond|
|2|Rose|Tyler|
|3|Martha|Jones|
|4|Donna|Noble|
|5|River|Song|
# SELECT Data
## Simple `SELECT` Query
you can write a simple `SELECT` query to get results back from a desired SQL tables, The syntax for the `SELECT` is `SELECT [columns] FROM [table];`
where `[column]` are desired column names from the table separated be commas.
## Example database table

For the rest of this reading, you will use this example table to make your queries:

`puppies` table:

|`id`|`name`|`age_yrs`|`breed`|`weight_lbs`|`microchipped`|
|---|---|---|---|---|---|
|1|Cooper|1|Miniature Schnauzer|18|1|
|2|Indie|0.5|Yorkshire Terrier|13|1|
|3|Kota|0.7|Australian Shepherd|26|0|
|4|Zoe|0.8|Korean Jindo|32|1|
|5|Charley|1.5|Basset Hound|25|0|
|6|Ladybird|0.6|Labradoodle|20|1|
|7|Callie|0.9|Corgi|16|0|
|8|Jaxson|0.4|Beagle|19|1|
|9|Leinni|1|Miniature Schnauzer|25|1|
|10|Max|1.6|German Shepherd|65|0|

## Example table set up
Open SQLite3 in your terminal, create the `puppies` table, and insert the rows using the following:
```sql
CREATE TABLE puppies (
  id INTEGER,
  name VARCHAR(100),
  age_yrs DECIMAL(2,1),
  breed VARCHAR(100),
  weight_lbs INT,
  microchipped BOOLEAN
);

INSERT INTO puppies 
VALUES 
  (1, 'Cooper', 1, 'Miniature Schnauzer', 18, 1),
  (2, 'Indie', 0.5, 'Yorkshire Terrier', 13, 1),
  (3, 'Kota', 0.7, 'Australian Shepherd', 26, 0),
  (4, 'Zoe', 0.8, 'Korean Jindo', 32, 1),
  (5, 'Charley', 1.5, 'Basset Hound', 25, 0),
  (6, 'Ladybird', 0.6, 'Labradoodle', 20, 1),
  (7, 'Callie', 0.9, 'Corgi', 16, 0),
  (8, 'Jaxson', 0.4, 'Beagle', 19, 1),
  (9, 'Leinni', 1, 'Miniature Schnauzer', 25, 1),
  (10, 'Max', 1.6, 'German Shepherd', 65, 0);
```
### `SELECT` specific columns

If you wanted to see just the `name`, `age_yrs`, and `weight_lbs` columns from the table, you could use the query:

```sql
SELECT name, age_yrs, weight_lbs FROM puppies;
```
This query will give you:

|`name`|`age_yrs`|`weight_lbs`|
|---|---|---|
|Cooper|1|18|
|Indie|0.5|13|
|Kota|0.7|26|
|Zoe|0.8|32|
|Charley|1.5|25|
|Ladybird|0.6|20|
|Callie|0.9|16|
|Jaxson|0.4|19|
|Leinni|1|25|
|Max|1.6|65|
### `SELECT` all columns

Using `SELECT *` is a quick way to get back all the columns in a given table. It is discouraged in queries that you write for your applications. Use it only when playing around with data, not for production code.
```sql
SELECT * FROM puppies;
```
This will give you the original table with all columns and rows.

## Using `SELECT` with the `WHERE` clause

Just using the `SELECT` query by itself will return every row in the table, but if you want to only select rows that satisfy a certain condition, the `WHERE` clause can filter your results. Clauses in SQL are parts of a query that can filter or manipulate how you want your rows returned to you.

Let's take a look at some examples of how to use the `WHERE` clause.

### `WHERE` clause for a single value

The simplest `WHERE` clause finds a row by a single column value. The query below finds the entry that has an `id` of 5:
```sql
SELECT * FROM puppies
  WHERE id = 5;
  ```
> Note that string values MUST use single quotation marks.

You should get the following result:

| `id` | `name`  | `age_yrs` | `breed`      | `weight_lbs` | `microchipped` |
| ---- | ------- | --------- | ------------ | ------------ | -------------- |
| 5    | Charley | 1.5       | Basset Hound | 25           | no             |

# DELETE Data
## The `DELETE` statement

`DELETE` statements have the following syntax: `DELETE FROM [table] WHERE [condition];`.

You can see that the statement makes use of the `WHERE` clause to find the specific rows you want to delete. If you omit the `WHERE`, then all rows from your table will be deleted. This is different from dropping the table because the table still exists, but there just aren't any rows in it. Similar to dropping tables, `DELETE` statements should also be used judiciously in production to avoid deleting data by accident.

## Delete data in an example table

Say you have the `puppies` table again:

`puppies` table:

|`name`|`age_yrs`|`breed`|`weight_lbs`|`microchipped`|
|---|---|---|---|---|
|Cooper|1|Miniature Schnauzer|18|1|
|Indie|0.5|Yorkshire Terrier|13|1|
|Kota|0.7|Australian Shepherd|26|0|
|Zoe|0.8|Korean Jindo|32|1|
|Charley|1.5|Basset Hound|25|0|
|Ladybird|0.6|Labradoodle|20|1|
|Callie|0.9|Corgi|16|0|
|Jaxson|0.4|Beagle|19|1|
|Leinni|1|Miniature Schnauzer|25|1|
|Max|1.6|German Shepherd|65|0|

Once you've created and inserted the values in SQLite3, you can now run a `DELETE` statement. For example, if you wanted to remove all `puppies` that aren't `microchipped`, you could run:

```sql
DELETE FROM puppies
  WHERE microchipped = 0;
```
Verify it worked by running a `SELECT` statement after running the `DELETE` statement:
```sql
SELECT * FROM puppies;
```
You would get the following result:

|`name`|`age_yrs`|`breed`|`weight_lbs`|`microchipped`|
|---|---|---|---|---|
|Cooper|1|Miniature Schnauzer|18|1|
|Indie|0.5|Yorkshire Terrier|13|1|
|Zoe|0.8|Korean Jindo|32|1|
|Ladybird|0.6|Labradoodle|20|1|
|Jaxson|0.4|Beagle|19|1|
|Leinni|1|Miniature Schnauzer|25|1|

The `WHERE` condition of the `DELETE` statement can be anything you would similarly put in a `SELECT... WHERE...` clause. (This would make sense since a `DELETE` is essentially doing a `SELECT`, and then deleting the rows it finds.)


# UPDATE Data
## Example table set up

First, you'll need a database table. Consider one with these specifications:

|Name|Data type|Constraints|
|---|---|---|
|id|`INTEGER`|`PRIMARY KEY` `AUTOINCREMENT`|
|first_name|`VARCHAR(255)`|`NOT NULL`|
|last_name|`VARCHAR(255)`|`NOT NULL`|

This table can be created with this SQL statement:
```sql
CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
```

Second, the table should be populated with data like this:

|`id`|`first_name`|`last_name`|
|---|---|---|
|1|Amy|Pond|
|2|Rose|Tyler|
|3|Martha|Jones|
|4|Donna|Noble|
|5|River|Song|
This data can be inserted using the following SQL statement:
```sql
INSERT INTO friends (first_name, last_name)
VALUES
('Amy', 'Pond'),
('Rose', 'Tyler'),
('Martha', 'Jones'),
('Donna', 'Noble'),
('River', 'Song');
```
## Updating a row in a database table

In order to update data in a database, you'll need to specify:

- The table to `UPDATE`
- Which column to `SET` with the new value to set it too
- `WHERE` to find the row to update.

Imagine your friend **Amy Pond** gets married to **Sam Blue**. Now, you need to update her last name.
```sql
UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Amy' AND last_name = 'Pond';
```
It is a good practice to verify each `UPDATE` after you run it:
```sql
SELECT * FROM friends;
```

