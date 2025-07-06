# 🔷 What is the `fetch` API?

The `fetch` API is a **built-in browser function** that allows JavaScript to make **HTTP requests** (like GET, POST, etc.) to a **server** to:

- **Get data** (like a product list or a user profile)
    
- **Send data** (like a form or review)
    
- **Update data**
    
- **Delete data** 

## ⚠️Important:  
`fetch` **only works in the browser** (like Chrome or Firefox), not in Node.js (unless you install a package like `node-fetch`).
# 🔷 Syntax of `fetch`
```js
fetch(url,[options]);
```
## 1. **URL** (required):

The endpoint you are sending the request to (e.g., `/products/1/reviews`).
## 2. **options** (optional):
An object that lets you customize the request. You can specify:

| Property  |     | What it does                                                                   |
| --------- | --- | ------------------------------------------------------------------------------ |
| `method`  |     | HTTP method like `"GET"` or `"POST"`                                           |
| `headers` |     | Tells the server what kind of data you’re sending (like JSON, form data, etc.) |
| `body`    |     | The data you want to send (usually in string format)                           |
# 🔷 What does `fetch` return?

`fetch` returns a **Promise**.
That Promise:
- **resolves** with a **Response object** when the server responds
    
- Can give you access to:
    
    - **HTTP status** → `res.status` (e.g., 200, 404)
        
    - **Headers** → `res.headers.get("Content-Type")`
        
    - **Body** of the response → use `.text()`, `.json()`, or `.blob()` to read it
# 🔷 Example 1: GET Request (to fetch data)
```js
fetch("/categories/beauty/products")
  .then(function(res) {
    console.log("response:", res);
    return res.text();  
    // convert the response body stream to plain text
  })
  .then(function(data) {
    console.log("data:", data); 
    // show the actual content from the server
  });

```
### 🔍 Breakdown:

1. You call `fetch()` with a URL.
    
2. It returns a Promise. When the server responds, `.then()` is called.
    
3. `res.text()` reads the response **body** as text (HTML or plain string).
    
4. The second `.then()` gets the final result (the actual content).
## 👀 Example result:
```HTML
<h1>Beauty Products</h1>
<ul><li>Lipstick</li><li>Perfume</li></ul>
```
# 🔷 Example 2: POST Request (to send data)
```js
fetch("/products/1/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "comment=works+well&starRating=4"
})
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data);
  });
```
### 🔍 Breakdown:

#### 1. `method: "POST"`

Tells the server you're sending data to **create** something (in this case, a new review).

#### 2. `headers: { "Content-Type": "application/x-www-form-urlencoded" }`

This tells the server:

> "I'm sending a form (like an HTML form submission)."

#### 3. `body: "comment=works+well&starRating=4"`

This is the **form data** being sent.  
It’s **URL-encoded** just like a browser form submission:

- `"works well"` becomes `"works+well"`
    
- Keys and values are joined with `=`, and key-value pairs are joined with `&`
    

#### 4. `.then(res => res.text())`

Once the server responds, convert the response body to text.

#### 5. `.then(data => console.log(data))`

Now you have the actual server response (maybe an HTML page or a confirmation message).

---
# 🧠 Notes on Response Object

When you call `fetch()`, you get a **Response object**, which contains:

|Property|What it gives|
|---|---|
|`status`|HTTP status code (e.g., 200 OK, 404 Not Found)|
|`url`|The full URL that was requested|
|`headers`|Metadata about the response (content type, cookies, etc.)|
|`.text()`|Gets the response body as a string|
|`.json()`|Gets the response body as JSON (used when server sends JSON)|
# 🔧 Where can I use `fetch`?

### ✅ Works in:

- Chrome/Firefox Developer Console
    
- Any JavaScript code running **in the browser**
    
### ❌ Does NOT work by default in:

- Node.js (like in VS Code terminal), unless you install `node-fetch` or use `global.fetch` in newer versions.
