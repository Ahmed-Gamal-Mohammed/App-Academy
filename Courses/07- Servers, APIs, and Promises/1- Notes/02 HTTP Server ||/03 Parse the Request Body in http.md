In this article you will learn more about how to parse the body of the request that have a `Content-Type` header of `application/x-www-form-urlencoded`.

# Reading the body of the request
## 🧠 Goal:

You want to **read the body of a request** that is sent to your **Node.js HTTP server**.

When someone (like a browser or Postman) sends a **POST** request to your server with some data (e.g. JSON, form data, etc.), the data is **not received all at once**. It comes in **small chunks** (called **data packets**), like little pieces of a letter being sent one at a time.

So, your job is to **collect** all those pieces, **combine** them, and then **use** the full request body.

---
## 📦 What is a "readable stream"?

When the request (`req`) comes into your server, it is treated as a **stream of data**. A stream means:

- You don’t get the whole thing at once.
    
- You **listen** for events like:
    
    - `'data'`: when a chunk arrives
        
    - `'end'`: when all chunks are done
## 🛠️ Step-by-step explanation:
```node.js

const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    console.log(reqBody);
  });
});
```


```node.js
const server = http.createServer((req, res) => {
  let reqBody = '';

```
Here:

- You create the server.
- You create a variable `reqBody` to collect the incoming data.
---
### 1️⃣ `req.on('data', callback)` – This listens for chunks of data
```node.js
  req.on('data', (data) => {
    reqBody += data;
  });
```
- Whenever a piece (chunk) of the request body arrives, this function runs.
- That `data` chunk is like a part of a message.
- You add that piece to `reqBody` (like putting puzzle pieces together).
---
### 2️⃣ `req.on('end', callback)` – This tells you the data is fully received
```node.js

req.on('end', () => {
    console.log(reqBody);
  });
});
```
- After all chunks have arrived, this function runs.
- At this point, `reqBody` contains the **complete request body**.    
- You can now log it, parse it, or use it however you want.


# Parsing `application/x-www-form-urlencoded`

## 🧠 Goal:

You want to **convert form data** from a string into a **JavaScript object**.

This form data is usually sent from a webpage when someone submits a form, and it comes in a format called:
```bash
`application/x-www-form-urlencoded`
```
## 🧾 Example Request Body:

When a form is submitted like this:

| Input Name  | Value        |
| ----------- | ------------ |
| name        | Fido         |
| color       | black        |
| age         | 1            |
| description | Hello World! |
It arrives at your Node.js server **as one long string**:
```ini
name=Fido&color=black&age=1&description=Hello+World%21
```
## 🛠️ Step-by-step Explanation of How to Parse It:

Let’s turn this string into a JavaScript object, like:
```node.js
{
  name: "Fido",
  color: "black",
  age: "1",
  description: "Hello World!"
}
```
### 1️⃣ **Split by `&` to get key-value pairs**

The `&` character separates different key-value pairs
```node.js

const body="name=Fido&color=black&age=1&description=Hello+World%21";
const pairs = body.split("&");

// pairs = [
//   "name=Fido",
//   "color=black",
//   "age=1",
//   "description=Hello+World%21"
// ]
```
### 2️⃣ **Split each pair by `=` to separate keys from values**

Loop through each pair and split it:
```node.js
const keyValuePairs = pairs.map(pair => pair.split("="));

// keyValuePairs = [
//   ["name", "Fido"],
//   ["color", "black"],
//   ["age", "1"],
//   ["description", "Hello+World%21"]
// ]
```

### 3️⃣ **Replace `+` with spaces in the values**

In URL-encoded data, a **space** becomes a `+`. So you need to change all `+` to spaces:
```node.js
keyValuePairs.forEach(pair => {
  pair[1] = pair[1].replace(/\+/g, " ");
});
```
Now:
```node.js
`// ["description", "Hello World%21"]`
```
### 4️⃣ **Decode percent-encoded characters**

Some characters (like `!`, `@`, etc.) are encoded for safe transmission.
- Example: `%21` means `!`
You decode them using:
```node.js
decodeURIComponent()
```
So:
```node.js
pair[1] = decodeURIComponent(pair[1]);
```
Now you get:
```node.js
["description", "Hello World!"]
```
### 5️⃣ **Put everything into a JavaScript object**

Final step: create an empty object and add each key-value pair.
```node.js
const formData = {};

keyValuePairs.forEach(([key, value]) => {
  formData[key] = value;
});
```
Result:
```node.js
{
  name: "Fido",
  color: "black",
  age: "1",
  description: "Hello World!"
}
```
