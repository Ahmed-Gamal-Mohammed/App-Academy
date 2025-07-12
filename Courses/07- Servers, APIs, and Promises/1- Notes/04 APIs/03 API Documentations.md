# What s a Web API Server ?
A Web API Server is different form a traditional web server 

| Traditional Website                  | Web API                                        |
| ------------------------------------ | ---------------------------------------------- |
| shows HTML pages (forms, blogs, etc) | Sends raw data (usually *JSON*)                |
| Designed for users                   | Designed for other programs or frontend        |
| Uses mostly `GET` and `POST` methods | Uses `GET` , `POST`, `PUT`, `PATCH`, `DELETE`  |
so, instead of showing a webpage,  a *Web API* just sends or receives data like this:
```JSON
{
  "username" : "Ahmed",
  "email" : "ahmed241gamal@gmail.com"
}
```
# RESETful Convention 
REST is a designed pattern for creating APIs, REST uses clear, standard *URLs* and *HTTP* methods to perform actions on resources (like users, posts, tweets and etc)

Here's a simple table of how RESTful routes work:

| URL Pattern | Method        | Action  | Example               |
| ----------- | ------------- | ------- | --------------------- |
| `/posts`    | `GET`         | Get all | Get all posts         |
| `/posts`    | `POST`        | Create  | Create a new post     |
| `/posts/5`  | `GET`         | Get one | Get post with ID 5    |
| `/posts/5`  | `PUT`/`PATCH` | Update  | Update post with ID 5 |
| `/posts/5`  | `DELETE`      | Delete  | Delete post with ID 5 |
Example with Tweets

|URL|Method|What it does|
|---|---|---|
|`/my/tweets`|GET|Get all tweets|
|`/my/tweets`|POST|Create a new tweet|
|`/my/tweets/17`|GET|Get tweet with ID = 17|
|`/my/tweets/17`|PATCH|Update some data in tweet 17|
|`/my/tweets/17`|DELETE|Delete tweet 17|
## 🧩 Nested Resources

Sometimes resources belong to other resources.

Example: Comments on a blog post.

### URL structure for nested resources:

| URL Pattern         | Meaning                               |
| ------------------- | ------------------------------------- |
| `/posts/2/comments` | Get/create comments on post ID 2      |
| `/comments/10`      | View/update/delete comment with ID 10 |

# 🧰 Real-World API Example: GitHub

GitHub uses RESTful API design and JSON format.

If you visit:
```URL
`https://api.github.com/users/app-academy`
```
You’ll get a JSON response like:

```JSON
{
  "login": "app-academy",
  "id": 3155975,
  "avatar_url": "https://avatars0.githubusercontent.com/u/3155975?v=4",
  "followers_url": "https://api.github.com/users/app-academy/followers",
  "repos_url": "https://api.github.com/users/app-academy/repos"
}
```
Each key like `"repos_url"` is **another API endpoint**. For example:

- If you open `followers_url`, you get **a list of followers**.
    
- If you open `repos_url`, you get **all public repositories** for that user.
