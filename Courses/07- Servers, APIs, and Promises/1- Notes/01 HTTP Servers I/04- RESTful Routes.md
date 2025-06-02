# Routes vs. Endpoints
## what is a route?
- A **route** is the URL path for a request
- Example: `/users`, `/session`, `/login`
- It tells the server **"where"** the request is trying to go.

## What is endpoint?
An **endpoint** is a pattern for a request that has a specific route and HTTP verb combination to define how the server should process the request and what the response is expected to look like
	
An **endpoint** is more specific. It includes **both**:
- the **route (URL path)**, and
- the **HTTP method** (also called HTTP verb), like `GET`, `POST`, `DELETE`, etc.
    
So, an endpoint tells the server:
> “Do this kind of action (**HTTP (verb) method**) at this specific path (**route**).”

**Endpoints are used to distinguish different types of request from each other**

The HTTP verb or method and URL path of a request are both used to identify the endpoint of a request 
## **Examples**:
Let’s look at this one:
- **Endpoint**: `GET /users`
    - **Route**: `/users`
    - **Method**: `GET` → maybe fetch or list all users

Another one:
- **Endpoint**: `POST /users`
    - **Route**: `/users`
    - **Method**: `POST` → maybe create a new user
    
Even though both use the **same route** (`/users`), the **endpoint is different** because the method (`GET` vs `POST`) is different.

Here are some examples of endpoints Vs routes:
- Endpoint: `GET/users`, Route: `/users`
- Endpoint: `POST /users`,Route: `/users`
- Endpoint: `POST /session`,Route `/session`
- Endpoint: `DELETE /login`,Route `/login`
## **Why is this important?**
Endpoints help the server know exactly what action to perform.
For example:

| HTTP Method | Route    | Meaning (Common REST Action)   |
| ----------- | -------- | ------------------------------ |
| POST        | /users   | Create a new user              |
| POST        | /session | Log in (create a session)      |
| DELETE      | /login   | Log out (delete login session) |
| GET         | /users   | Get a list of users            |


**REST**: is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses
## Route Parameters
- A **route parameter** is a **placeholder** in a URL path that can change depending on the request.
- It allows you to define **generic routes** that can handle many different values.
### 🔹**How do Route Parameters look?**
They are written using a **colon (`:`)** followed by a **name**.
Example:
```bash
/tweets/:tweetId
```
Here:
- `:tweetId` is the **route parameter**.
- It acts like a **variable** that can be replaced with different values. 
### 🔹**Why use Route Parameters?**
Imagine your app shows individual tweets. You might want to access tweets like:
- `/tweets/17`
    
- `/tweets/123`
    
- `/tweets/aefe116d-352b-41c2-a5bb-fc74365f2697`
Instead of writing a separate route for every tweet ID, you write **one general route**:
```bash
`/tweets/:tweetId`
```
The server will understand that whatever value comes in place of `:tweetId` should be treated as the ID of a tweet.

### 🔹 **How does this help?**
It helps:
- **Generalize** your routes
- **Reuse** code to handle similar requests
- **Organize** your app and documentation
### 🔹 Example

Let’s say your backend has this route defined:
```JS
app.get('/tweets/:tweetId', (req, res) => {
  const id = req.params.tweetId;
  res.send(`You requested tweet with ID: ${id}`);
});
```
Now if someone visits:
```bash
`/tweets/17`
```
The server responds:
```csharb
`You requested tweet with ID: 17`
```
If someone visits:
```bash
`/tweets/abc123`
```
The server responds:
```csharb
`You requested tweet with ID: abc123`
```

**Route parameters are often used in documentation to group and generalize route paths with a variable segment.**
# Rules of ReST
## 🌐 What is REST?
**REST (Representational State Transfer)** is a way of designing web APIs (the backend part of apps).

It’s **not a strict rulebook** or standard like HTML or JavaScript — it’s just a **set of helpful guidelines** (called constraints) that many developers follow to build **clean, reliable, and scalable web APIs**.

## 🔑 REST Has 6 Rules 
Here are **3 main rules (or constraints)** REST APIs usually follow:

1. 🧑‍💻 **Decoupled Client-Server**
	1. The **client** (e.g., browser, mobile app) and the **server** (backend that holds data) are **separate**.
	2.  ***Each request from client to server must contain all information needed to understand the request***
	3. They can **work independently**.
	4. You can update the frontend **without** touching the backend, and vice versa.
	5. Example:
		If you change your frontend from a web app to a mobile app, the backend doesn’t need to change — it still provides the same data.
	6. **Why it's important**:
	    - Teams can develop and scale each side separately
	    - Clients don't need to know server implementation details
	    - Servers don't need to know client UI requirements

2. 🧠 **Stateless**
	1. Every request from the client to the server is **independent**.
	2. The server **doesn’t remember** anything about previous requests.
	3. **Luckily, this is a natural fit for HTTP operations in which  requests are intended to be independent and short-lived** 
	4. 📦Example :
		1. If you send a request to get your profile, you must include everything the server needs to know — like your user ID or token — **each time**.
		2. The server doesn’t "remember" who you are from earlier. No long sessions.
	5. ✅ Why is this good?
		- It's simple and fast.
		- Easier to scale (handle many users at once).
3. 🧭 **Uniform Interface**
	1. REST APIs should have a **consistent and predictable structure**.
	2. URLs and actions (like `GET`, `POST`, `PUT`, `DELETE`) should follow a common pattern.
	3. 📦 Example (for a "users" resource):
		1.  |   HTTP Method |  URL        |       What it does             |
			|-----------------|--------    | ---------------               |
			|GET                     |  /users    |      Get all users              |
			|GET                     |  /users/5 |   Get user with ID 5       |
			|POST                   |  /users    |   Create a new user       |
			|PUT                      | /users/5 |   Update user with ID 5 |
			|DELETE                | /users/5 |    Delete user with ID 5 |
		
		2. ✅ Why is this good?
			1. - Easy for developers to understand and use.
			2. You don’t need to read the docs too deeply — you already know what to expect.
## Why These Matter
These constraints make REST APIs:
- **Predictable**: Developers can quickly understand how to use them
- **Scalable**: Statelessness allows easy horizontal scaling
- **Flexible**: Clients and servers can evolve independently
- **Web-friendly**: Built on standard HTTP protocols
# What does a RESTful route look like?
## 🧩 What is a RESTful Route?
A **RESTful route** is a URL (route) that follows the **REST style** — meaning:
- It is **based on a resource** (like users, tweets, posts, etc.)
- It uses **HTTP methods** (GET, POST, PUT, DELETE) to show what action you're doing
- It is **clean**, **predictable**, and **easy to understand**
### 🧱 Start With the Data Model
> RESTful routes are **representational** — they are built around the **thing (resource)** you're working with.

For example:  
If you're building a **Twitter clone**, your data model might include:
- Users
- Tweets
- Likes
- Follows

Let’s focus on **Tweets**.

---
✨ Now Build RESTful Routes for "Tweets"

| Action         | HTTP Method | URL                | Description                   |
| -------------- | ----------- | ------------------ | ----------------------------- |
| See all tweets | GET         | `/tweets`          | Show a list of tweets         |
| See one tweet  | GET         | `/tweets/:id`      | Show tweet with a specific ID |
| Create a tweet | POST        | `/tweets`          | Add a new tweet               |
| Update a tweet | PUT         | `/tweets/:id`      | Change the content of a tweet |
| Delete a tweet | DELETE      | `/tweets/:id`      | Remove a tweet                |
| Like a tweet   | POST        | `/tweets/:id/like` | "Like" the tweet with that ID |
|                |             |                    |                               |
### ✅ Why This Is "RESTful"
- All the routes are based on the **resource name** (in this case, `tweets`)
- You **don't use verbs in the URL** like `/createTweet`, `/getTweet`
- Instead, you let the **HTTP method (GET, POST, etc.) tell the action**
- Each route **represents something** — a tweet, a like, a user, etc.

### 🧠 In Simple Words:
> A RESTful route is just a smart, clean way to organize your URLs, so other developers know exactly what they do just by looking at them.
---
### 📦 Bonus Tip: RESTful Naming = Plural nouns
Always use **plural nouns** for resources:
- ✅ `/tweets`, `/users`, `/posts`
- ❌ `/tweet`, `/user`, `/post` (not REST convention)
- ---

## Two kinds of URLs: Collection vs. Singular
**In RESTful APIs, you generally have two kinds of URLs, ones that point at _collections of resources_ and ones that point at _single resources_.**

When designing a RESTful API, you usually have two types of **URLs (paths)** that point to **resources** on the server:

### 🔹 1. **Collection URLs** (Plural nouns)
These URLs **represent a group of data items** — like a list of people, all invoices, or all houses.

They end in **plural nouns** like `/people`, `/invoices`, or `/houses`.
- Think of them like asking: "Show me the list of all _____."
#### Examples:
- `/invoices` → All invoices
- `/people` → All people in the system
- `/houses` → All houses available
    
These paths are **used to interact with or get all items** in that category (resource).

### 🔹 2. **Singular Resource URLs** (Using IDs)
These URLs point to **a single, specific item** in a collection. You do this by adding the **unique ID** of the item after the collection path.

Think of them like asking: "Show me this specific _____ with ID XYZ."
#### Examples:
- `/invoices/PK-200201` → Just the invoice with ID `PK-200201`
- `/people/10103` → Just the person with ID `10103`
- `/houses/bdfa5ef9-...` → A specific house by its unique identifier (UUID)
##### Example with Twitter
- `/my/tweets` → All the tweets made by you (a collection)
- `/my/tweets/17` → A specific tweet you made with the ID `17` (a single resource)
---
### 🔹 Special IDs (e.g., `current`)
Sometimes, you use **special words instead of real IDs** in the path, like `/weather/current`.

This doesn’t point to a fixed item but **tells the server to return the "latest" record**.
#### Compare:
- `/weather/10392` → Weather data with ID `10392` (specific item)
- `/weather/current` → The **most recent** weather data (not a fixed item, but a special rule)
### ✅ Summary

| Type of URL      | Example               | What it means                      |
| ---------------- | --------------------- | ---------------------------------- |
| Collection       | `/people`             | All people                         |
| Single resource  | `/people/10103`       | A specific person                  |
| Collection       | `/invoices`           | All invoices                       |
| Single resource  | `/invoices/PK-200201` | A specific invoice                 |
| Special resource | `/weather/current`    | Latest weather data (not fixed ID) |
# How to create RESTful Endpoints
## 🧠 Key Concepts First
### ❓What’s a RESTful Endpoint?
A **RESTful endpoint** is a URL path that follows a standard pattern to perform **CRUD operations** (Create, Read, Update, Delete) on **resources** (like tweets, people, invoices, etc.).
### ❗Limitation with HTML Forms:
- HTML **links** (`<a>`) only support `GET` requests.
    
- HTML **forms** (`<form>`) only support `GET` and `POST` requests.
    
- That means, in HTML-based views, you **cannot use PUT, PATCH, or DELETE** directly.

So, we **simulate** those other HTTP verbs (like PUT or DELETE) using only `POST`, and follow naming conventions in the **path** (like `/delete`).

## 🛠 How RESTful Endpoints Work (HTML Version)
Here’s a table of how different **paths + verbs** are used to create or modify resources (e.g., tweets, people, etc.):

| Path                        | Verb   | Purpose                                 |
| --------------------------- | ------ | --------------------------------------- |
| `/resource-name`            | `GET`  | Show a list of all items (Index page)   |
| `/resource-name/new`        | `GET`  | Show a form to create a new item        |
| `/resource-name`            | `POST` | Submit the "create new" form            |
| `/resource-name/:id`        | `GET`  | Show the details of one item            |
| `/resource-name/:id/edit`   | `GET`  | Show the edit form for one item         |
| `/resource-name/:id`        | `POST` | Submit the edit form to update the item |
| `/resource-name/:id/delete` | `POST` | Submit a request to delete the item     |

## 🐦 Twitter Example (Real World)

Let’s apply that to a **Twitter-style app**, where the resource is `tweets`.

|Path|Verb|Purpose|
|---|---|---|
|`/my/tweets`|`GET`|Show all of your tweets (list)|
|`/my/tweets/new`|`GET`|Show the form to create a new tweet|
|`/my/tweets`|`POST`|Submit form to create a new tweet|
|`/my/tweets/17`|`GET`|Show the tweet with ID `17`|
|`/my/tweets/17/edit`|`GET`|Show the form to edit tweet `17`|
|`/my/tweets/17`|`POST`|Submit the edit form to update tweet `17`|
|`/my/tweets/17/delete`|`POST`|Submit a form to delete tweet `17`|
## 🔄 What Happens After POST Requests?

When you `POST` (create, edit, or delete), the server **does not usually stay on the same page**. Instead, it **redirects** to another meaningful page:

- After creating → redirect to the **detail** page of the new tweet.
    
- After editing → redirect to the **detail** page of the updated tweet.
    
- After deleting → redirect to the **list** of tweets.
    

Example:
```text

POST /my/tweets         (create)  → redirect → GET /my/tweets/45
POST /my/tweets/17      (edit)    → redirect → GET /my/tweets/17
POST /my/tweets/17/delete → redirect → GET /my/tweets

```

## 🎨 Combining Views

Sometimes, developers **combine the "create form" with the list view** on the same page.

So instead of:
- `/my/tweets` → list
- `/my/tweets/new` → form to create

You just have:
- `/my/tweets` → both the **list of tweets** AND the **form to add a new one**
    
This simplifies navigation and reduces the number of pages.
# Nesting Resources
## 🧱 What is a Nested Resource?

Sometimes, a resource (like a **comment**) is **connected to another resource** (like a **tweet**).

> ✅ A **comment** belongs to a **tweet**  
> ✅ A **review** belongs to a **product**  
> ✅ A **reply** belongs to a **comment**

So we need the **main resource** (like the tweet) to do anything with the **nested resource** (like the comment).
## 🧭 What Should the URL Look Like?

We need to **include both** the main resource **and** the nested resource in the URL.
### 💬 Example: Tweets and Comments

| Action                            | URL                       | Method | Meaning                           |
| --------------------------------- | ------------------------- | ------ | --------------------------------- |
| See all comments for tweet 10     | `/tweets/10/comments`     | GET    | List all comments for tweet ID 10 |
| Show form to add comment to tweet | `/tweets/10/comments/new` | GET    | Show a form to write a comment    |
| Submit that comment               | `/tweets/10/comments`     | POST   | Add a new comment to tweet ID 10  |
## 👁️ What About One Specific Comment?

Once a comment is created, it has its **own ID**, and we can access it directly using a **shorter path** (just the comment ID):

| Action                      | URL                   | Method | Meaning                       |
| --------------------------- | --------------------- | ------ | ----------------------------- |
| See one comment (ID 55)     | `/comments/55`        | GET    | View comment #55              |
| Edit comment #55            | `/comments/55/edit`   | GET    | Show form to edit comment #55 |
| Submit edit for comment #55 | `/comments/55`        | POST   | Update the comment            |
| Delete comment #55          | `/comments/55/delete` | POST   | Delete the comment            |
Once the comment exists, we don’t need the tweet ID anymore to perform actions on it.

