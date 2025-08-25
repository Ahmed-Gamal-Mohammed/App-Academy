**DataBase hold collections of data that are stored separately from the server** 

# Intro to DataBase

## Relational Vs non-relational DataBases
*Relational DataBase:* They store data in rows and columns of tables, These databases typically use SQL (Structure Query Language)  to retrieve and manipulate data, so they may be referred to as SQL databases.

**A relational database is like stacks (tables) of boxes (rows) where each box in a stack has the same structure (columns) for what's inside.**
![[Pasted image 20250820074042.png]]
There are other databases called *documented databases*, or *Non-relational Databases* , or *NoSQL Databases* that have become popular since the mid-2000s. They serve a different purpose than relational databases by storing data in anything BUT tables, which can include *document* or *key-value sotres* 

**NoSQL databases are sets of items (documents) with have some similar and some different properties, like a shopping list or a clothing collection.**
![[Pasted image 20250820074341.png]]

## What is SQL ?
*SQL* stands for **Structure Query Language**: it's a declarative programming Language 

SQL is the primary way that you will interact with RDBMS to affect the data in a single databse or the structure of the databse itself
## RDBMS 
The RDBMS (Relational DataBase Management Systems) is a Software application that you run that your programs can connect to that they can store, modify, and retrieve data from a relational database. 

## SQLite?
### **What is SQLite?**

- **SQLite = software** → an **RDBMS** (Relational Database Management System).
    
- It is **open-source** and **lightweight**.
    
- Unlike most RDBMS (MySQL, PostgreSQL, Oracle, etc.), SQLite is **embedded**:
    
    - No separate **server process**.
        
    - Data is stored in a **single local file** on disk (e.g., `mydb.sqlite`).
        
    - Your application talks **directly** to that file through SQLite.
        
---
### **How it differs from client-server RDBMS**

- **MySQL / PostgreSQL**:
    
    - Run as a **server**.
        
    - Your app connects as a **client** over a network or socket.
        
    - Good for large, multi-user systems.
        
- **SQLite**:
    
    - **No server** → your app directly reads/writes the database file.
        
    - Simpler, faster, portable.
        
    - Best for small to medium apps, mobile apps, testing, or when you don’t want the complexity of managing a server.
### **Why is SQLite so popular?**

- Zero configuration (no setup, just a file).
    
- Small size and very fast for local operations.
    
- Reliable (ACID-compliant, handles crashes well).
    
- Cross-platform (works on Android, iOS, browsers, desktop apps).
# DataBase Table Schemas
## What is a table ?
A *table* is a **logical** structure that defines how data is stored and contains that data that meets the definition 

Most people think about tables like spreadsheets that have a specific number of columns and rows that contain the data, where rows represent individual entities of the table, and columns describe a property of that entity.

| `name`  | `age_yrs` | `breed`      | `weight_lbs` | `microchipped` |
| ------- | --------- | ------------ | ------------ | -------------- |
| Callie  | 1         | Corgi        | 16           | no             |
| Charley | 1.5       | Basset Hound | 25           | no             |
| Jaxon   | 0.4       | Beagle       | 19           | yes            |
This means that a table typically is describing one type of entity. For Example, a `dogs` table would contain rows of individual dogs, where the columns describe properties of a dog (e.g. `name`, `age_yrs`, `breed`, `weight_lbs`, `microchipped`, etc.)

## Column Types
In SQL, table columns must be given a specific type. Much like JavaScript variable types, each column type is allocated a maximum amount of storage. Choosing appropriate column types for your datasets will allow SQL to more efficiently store your data.
### Numeric types
ANSI SQL supports the following numeric types:

- The `INTEGER` should be familiar. It's just a number without a decimal. 

- The `DECIMAL` type is a number with a decimal, aka a floating-point number.

- The `BIGINT` type that will hold huge Integer values but  
### String types 
There are three kind of commonly used string types that databases support based on the ANSI SQL standard 

The Most commonly used type is known as the `variable Character` or `VARCHAR` 

Another commonly used type is known simply as `TEXT`. This is a column that can contain an *unlimited* number of characters 
Use them judiciously as they are notoriously slower than those with other string types.

### Boolean types
When you need to store a `true` or `false` value in the database, use the [`BOOLEAN`](https://www.sqlite.org/datatype3.html#boolean_datatype) type.

### Column Types in SQLite
Most SQL Databases use static, rigid data types for the columns. However, **SQLite** uses a more general, dynamic system. This means there are fewer types to worry about in your table definitions.

- `INTEGER` - A number without decimals
- `REAL` - A number with decimals (floating-point)
- `TEXT` - A string
- `BLOB` - Data stored exactly as it was input (good for images, really long text, and other big "blobs" of stuff)
- `NUMERIC` - Special case for numbers which auto-converts between the other types, depending on the value (If you are interested in the specifics, see "3. Type Affinity" in the documentation for [Data Types in SQLite3](https://www.sqlite.org/datatype3.html).)

Fortunately, SQLite can understand the more rigid types, and it will "translate" to the corresponding SQLite column type.

SQLite will convert the `BOOLEAN` type to `NUMERIC`.

- `false` as 0 (zero)
- `true` as 1 (one)

## Column constraints
Column types can be considered what are called **constraints** on columns. These are conditions that must be met by each entry in the column. So a `VARCHAR(50)` type column is given the constraint of being a string type of no more than 50 characters, and so on and so forth. However, these aren't the only constraints you can place on columns.
### `NULL` and `NOT NULL`
`NULL` is a possible value in a column that represents an empty column value. If you do not want to have any `NULL` values in a column, you could specify the column to be `NOT NULL` when defining it.

For example in the following `dogs` table, the `breed` column is able to have `NULL` values because it does not have a `NOT NULL` constraint:

|`name`|`age_yrs`|`breed`|
|---|---|---|
|Callie|1|Corgi|
|Charley|1.5|Basset Hound|
|Jaxon|0.4|NULL|
### `DEFAULT`

If you want the column to have a default value when no value is given on insertion, use the `DEFAULT` constraint. You can define a default value for the column if no value exists for the column of an entity you're trying to insert into the table. For example, if the `breed` column has a `DEFAULT` constraint of `Mixed`, then the resulting table would look like:

| `name`  | `age_yrs` | `breed`      |
| ------- | --------- | ------------ |
| Callie  | 1         | Corgi        |
| Charley | 1.5       | Basset Hound |
| Jaxon   | 0.4       | Mixed        |
### `PRIMARY KEY`
A **primary key** is a column that contains unique identifiers for each entity in the table. For example, a Social Security Number is unique to a single person and could potentially be used as a primary key on a table that stores data of US citizens.

`people` table:

|`ssn`|`first_name`|`last_name`|
|---|---|---|
|123-45-6789|John|Doe|
|987-65-4329|Jane|Doe|
|987-65-4320|John|Smith|

In the table above, the `ssn` column acts as a primary key because each entry in the column uniquely identifies a person in the `people` table.

Often, primary keys are integers (a.k.a. `INTEGER PRIMARY KEY`) because

1. There is not another column that must have a unique value
2. An **integer primary key** optimizes your SQL database for the fastest performance when retrieving data by the identifying column

| `id` | `cat_name` | `color_description`   |
| ---- | ---------- | --------------------- |
| 123  | Sam        | Black                 |
| 987  | Boots      | White with Black Paws |
| 4320 | Sam        | Calico                |

### `AUTOINCREMENT`
Simply put, `AUTOINCREMENT` causes the default value to be the next integer in the series. So if the last entry has a value of `1234`, the next entry that gets inserted will have a value of `1235` for the column with the `AUTOINCREMENT` constraint.

> Tip: `AUTOINCREMENT` is commonly used in a primary key column, e.g. `INTEGER PRIMARY KEY AUTOINCREMENT`.

## Steps to designing a database

When designing your own database schemas, consider these factors in order. Start with what tables you will need, the columns within each table, and the types of each column. Remember to include a primary key column in each table.

