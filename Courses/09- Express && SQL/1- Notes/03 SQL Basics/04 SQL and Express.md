## 🔹 1. Express Boilerplate (Basic Setup)

Every Express app starts with something like this:
```js
const express = require('express');
const app = express();

require('dotenv').config(); // load environment variables from .env file

app.use(express.json()); // so we can read JSON body from requests

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

```
👉 This creates a server on `http://localhost:5000`.  
Now, you can start adding routes like `/trees`, `/users`, etc.

---

## 🔹 2. Connecting to SQLite3 Database
We use the **sqlite3** library:
```js
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.data_source, // database filename stored in .env
    sqlite3.OPEN_READWRITE   // permission: can read and write but NOT create/drop tables
);

```
## 🔹 3. SQL Queries with Express Routes

Now the magic happens: **your routes talk to the database**.

---
### ✅ a) Get ALL rows (db.all)
```js
app.get('/trees', (req, res, next) => {
    const sql = 'SELECT id, name FROM trees';
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err); // pass error to Express error handler
        } else {
            res.json(rows); // send all rows as JSON
        }
    });
});
```
🔍 Breaking it down:

- `db.all` → gets **all rows** from a query.
    
- `params` → is an array of values to replace `?` in SQL (empty here).
    
- `rows` → the result (array of objects like `[ {id:1,name:"Oak"}, {id:2,name:"Pine"} ]`).
    
- If error → send it to Express error handling.

### ✅ b) Get ONE row by id (db.get)
```js
app.get('/trees/:id', (req, res, next) => {
    const sql = 'SELECT * FROM trees WHERE id = ?';
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
          next(err);
        } else {
          res.json(row); // send just 1 row
        }
    });
});

```

🔍 Explanation:

- `:id` in the URL → dynamic parameter (`/trees/5` → `req.params.id = 5`).
    
- `db.get` → gets **only one row**.
    
- The `?` is replaced with `params[0]` (the id).

### ✅ c) Insert a NEW row (db.run)
```js
app.post('/trees', (req, res, next) => {
    const sql = `
        INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
        VALUES (?, ?, ?, ?);
    `;
    const params = [
        req.body.name,      // comes from request body
        req.body.location,
        req.body.height,
        req.body.size
    ];

    const sqlLast = 'SELECT * FROM trees ORDER BY id DESC LIMIT 1';

    db.run(sql, params, (err) => {
        if (err) {
            next(err);
        } else {
            db.get(sqlLast, [], (err, row) => {
                res.json(row); // return the newly added row
            });
        }
    });
});

```
🔍 Step by step:

1. `INSERT INTO` → adds a new tree record.
    
    - `?` placeholders are replaced by the array `params`.
        
2. `db.run` → executes INSERT (doesn’t return data, only success/failure).
    
3. After inserting, we run another query:
	```sql
	SELECT * FROM trees ORDER BY id DESC LIMIT 1
	```
4. Send that row back as the response.
