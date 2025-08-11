# Using `express.static`
## 🧾 Goal:

You want to **serve static files** (like images, CSS, and JS) in your Express app so they can be accessed by the browser.
## 🧰 express.static Middleware

Express provides a **built-in middleware function** called `express.static` that helps you serve these static files.

## Syntax:
```js
express.static(root,[options]);
```
- `root`: the **folder on your computer** where the static files are stored.
    
- `options`: optional settings (you usually don't need them as a beginner).

But this function alone doesn't do anything until you **connect it to the Express app** using `app.use()`.

## ✅ The Full Pattern:
```node.js
app.use(urlPath, express.static(folderOnDisk));
```
### Breakdown:

- `urlPath`: the **virtual path** that users will visit in the browser.
    
- `folderOnDisk`: the **physical folder** on your machine where the files are stored.
    
## Example 
### 🧾 What You're Doing

You're serving **static files** using Express, which means your server sends files like HTML, CSS, JS, images, or PDFs **directly** to the browser when a user requests them.
### 📁 Project Structure 
```pgsql
project/
│
├── public/
│   ├── css/
│   │   └── your-style.css
│   ├── images/
│   │   ├── doggo.jpg
│   │   └── logo.png
│   ├── scripts/
│   │   └── hello.js
│   ├── helloworld.html
│   └── prospectus.pdf
│
├── app.js
├── package.json
└── package-lock.json
```
### The Code
```js
import express from "express";
const app = express();

// Serving static files from the public folder
app.use(express.static('public'));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

```
### What this does:

- `express.static('public')` tells Express:
    
    > “Serve all files inside the `public` folder directly to the browser.”
    
- `app.use(...)` applies that rule globally, meaning all HTTP GET requests will check the `public/` folder first.

### 🧭 How URLs Map to Files
Because you used:
```js
app.use(express.static('public'));
```
This sets the root (`/`) of your site to serve from the `public` folder.

| URL Requested                              | File Served From Disk       |
| ------------------------------------------ | --------------------------- |
| `http://localhost:5000/css/your-style.css` | `public/css/your-style.css` |
| `http://localhost:5000/images/doggo.jpg`   | `public/images/doggo.jpg`   |
| `http://localhost:5000/images/logo.png`    | `public/images/logo.png`    |
| `http://localhost:5000/scripts/hello.js`   | `public/scripts/hello.js`   |
| `http://localhost:5000/helloworld.html`    | `public/helloworld.html`    |
| `http://localhost:5000/prospectus.pdf`     | `public/prospectus.pdf`     |

🟢 **You don’t need to write any more routes!**  
Express will automatically serve these files when the browser asks for them via URL.
### 🔁 Two Equivalent Ways to Write It

Both of the following lines do **exactly the same thing**:
```js
app.use(express.static('public'));
```

```js
app.use('/', express.static('public'));
```
- `'/‘` is the root path.
    
- So both serve the contents of the `public` folder directly to the site’s root (`http://localhost:5000/`).
    
---
# 🧾 Multiple Static Folders
## 🧾 Why You Might Use Multiple Static Folders

Sometimes, your project might store static files in more than one location. For example:

- You might have `public/` for frontend assets like CSS and images.
    
- And a `files/` folder for downloadable PDFs or documents.

Express allows you to serve **multiple folders** as sources for static files using `express.static()` multiple times.
## ✅ Example Code:
```js
app.use(express.static('public'));
app.use(express.static('files'));
```
This tells Express:

1. First look for the requested file in the `public` folder.
    
2. If not found, then look in the `files` folder.
    
---
## 📁 Folder Structure Example:

Let’s say your project structure is like this:
```arduino
project/
│
├── public/
│   └── hello.html
│   └── image.png
│
├── files/
│   └── hello.html
│   └── doc.pdf
│
├── app.js
```
Now imagine you have **two `hello.html`** files:

- One in `public/hello.html`
    
- Another in `files/hello.html`
## 🌐 URL Access

| URL Requested                      | File Served From    | Why?                                         |
| ---------------------------------- | ------------------- | -------------------------------------------- |
| `http://localhost:5000/hello.html` | `public/hello.html` | Found first in `public/`                     |
| `http://localhost:5000/image.png`  | `public/image.png`  | Found only in `public/`                      |
| `http://localhost:5000/doc.pdf`    | `files/doc.pdf`     | Not in `public/`, so Express checks `files/` |
## ⚠️ Why **Order Matters**
```js
// 1st: check in public
app.use(express.static('public'));

// 2nd: check in files
app.use(express.static('files'));

```
When a request comes in, Express checks folders **in the order you define**. So:

- If a file exists in **both folders** with the same name, the one in `public/` is served **because it's registered first**.
    
- The second folder (`files/`) is only used if the file wasn't found in the first.
    
---
# 🌐 URL Mapping (With `/static` Path)

Now that you've added this:
```js
app.use('/static', express.static('public'));
```
All your files inside `public/` are **accessible through `/static` in the browser**.

|File in Disk|Accessible URL|
|---|---|
|`public/css/your-style.css`|`http://localhost:5000/static/css/your-style.css`|
|`public/images/doggo.jpg`|`http://localhost:5000/static/images/doggo.jpg`|
|`public/images/logo.png`|`http://localhost:5000/static/images/logo.png`|
|`public/scripts/hello.js`|`http://localhost:5000/static/scripts/hello.js`|
|`public/helloworld.html`|`http://localhost:5000/static/helloworld.html`|
|`public/prospectus.pdf`|`http://localhost:5000/static/prospectus.pdf`|
## ❓ Why Use a Virtual Path Like `/static`?

### 🔒 **Security / Organization**
You're clearly separating server-handled routes from static files. So:

- `/api/...` could be dynamic endpoints.
    
- `/static/...` could be reserved for images, CSS, JS, etc.
### 🎯 **Clarity**

It’s obvious for both developers and browsers that `/static/...` refers to assets, not dynamic data or API responses.

### 🎨 **Customizability**

If you ever want to change the static directory structure or host them elsewhere (like a CDN), having a clean `/static` path makes migration easier.

# Special case for production servers
## 🧾 The Problem

In development, we often run our server like this:
```js
node app.js
```
from the **project root directory**, so this works fine:
```js
express.static('public')
```
But in **production**, you might:

- Run the server from a **different folder** (not the project root)
    
- Use a process manager like `pm2` or `docker`, which runs Node in another context
    

In these cases, `'public'` as a **relative path** may no longer point to the correct location.

## ✅ The Solution: Use an **absolute path**

Use `path.join(__dirname, 'public')` so that:

- No matter **where** you run the app from,
    
- Node will always look at the correct full path to your `public/` folder.
    

---
## 🔧 Code Example
```js
import express from 'express';
import path from 'path';

const app = express();

// Serve static files from 'public' using an absolute path
app.use('/static', express.static(path.join(__dirname, 'public')));

```
## Breakdown

Let's go line by line:
### 1. `app.use()`

- Express method for adding middleware (like `express.static`)
### 2. `'/static'`

- This is the **URL prefix** the browser must use.
    
- Example: `http://localhost:5000/static/images/logo.png`    
### 3. `express.static(...)`

- Tells Express: serve static files from this folder.
    
### 4. `path.join(__dirname, 'public')`

- This is how you build an **absolute path**.
    
- `path.join(...)` joins paths safely across different operating systems (Windows, Linux, macOS).
    
- `__dirname` is a Node global variable that gives the full path of the folder **where the current file (like `app.js`) lives**.
    
- `'public'` is the subfolder inside that directory
