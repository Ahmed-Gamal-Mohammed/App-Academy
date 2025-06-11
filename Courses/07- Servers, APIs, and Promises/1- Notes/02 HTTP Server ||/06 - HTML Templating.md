# Introduction
## The Problem 
So far, you have learned how to serve and show a static HTML page from a server. However, what if you want to insert data into the HTML page? For example, there are about 200 billion tweets on Twitter created a year. To be able to display all those tweet pages to users using static HTML files, you would have to generate an HTML file for every single tweet. That's over 200 billion files!

It's not practical and space efficient to do this.
## The Solution 
Instead of creating an HTML page for every single tweet, what if you could insert the data of a single tweet into a template? Each tweet page is the exact same except the data about the tweet displayed.

That's where HTML templating comes in! HTML templating is when you insert specific elements of data into an HTML file
### 🔧 **What Is HTML Templating?**

**HTML Templating** is a way to **insert dynamic data** into a static HTML structure.

Imagine you have one HTML page that shows a tweet. But there are **billions of tweets** — creating a new HTML file for each one would be insane!

So instead, we:

- Make **one HTML template** (like a blank form).
    
- Fill it with **different data** (like tweet text, username, date) each time.

✅ This saves time, space, and effort
## Template Engine 
### ✨ **What’s a Template Engine?**

A **template engine** is a tool (or library) that helps you:

- Use templates
    
- Automatically **insert data into the template**
    
- Generate a final HTML page with actual values

It usually has its own **syntax** to make this process easier.

### 🚀 **Examples of Template Engines:**

Depending on the programming language you’re using:

- **Node.js**:
    
    - **Pug** (uses indentation and minimal syntax)
        
    - **Handlebars** (easy to use and readable)
        
- **Python**:
    
    - **Jinja** (commonly used with Flask)
        
    - **Genshi**

# Basic HTML Templating in http

## 🎯 Step 1: Create a Basic HTML Template

This is what your `profile-page.html` might look like:
```HTML

<title>#{username}'s Profile Page</title>
<h1>Welcome to #{username}'s profile page!</h1>
<p>#{biography}</p>

```
### 🧩 What Are `#{username}` and `#{biography}`?

These are **placeholders** — they mark where the real data should go.  
Think of them like “fill in the blank”:

- `#{username}` will be replaced with the actual user's name, like `"DemoUser"`
    
- `#{biography}` will be replaced with their real bio, like `"Hello World!"`
    

> ⚠️ Note: This `#{}` format is just a made-up rule in this case (not built-in to JavaScript). You’ll write code to search for these and replace them manually.

## 🧠 Step 2: Read the Template in JavaScript

Now you need to use JavaScript to:

- Read that template file
    
- Replace the placeholders with real values
    
- Get the final HTML string
```JS
const fs = require('fs');

// Step 1: Read the template file
const htmlTemplate = fs.readFileSync('./profile-page.html', 'utf-8');

// Step 2: Replace the placeholders
const htmlPage = htmlTemplate
  .replace(/#{username}/g, 'DemoUser')
  .replace(/#{biography}/g, 'Hello World!');

```
### What’s Happening?

- `fs.readFileSync` reads the file into a string.
    
- `replace(/#{username}/g, 'DemoUser')` finds **every** `#{username}` in the file and replaces it with `"DemoUser"` (the `g` means "global" — replace all, not just the first).
    
- The same happens for `#{biography}`.
    
---
## 📄 Final Output

Now, `htmlPage` is a full HTML string with the real data filled in:
```HTML
<title>DemoUser's Profile Page</title>
<h1>Welcome to DemoUser's profile page!</h1>
<p>Hello World!</p>

```

