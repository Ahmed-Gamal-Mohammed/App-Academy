# Basic route handlers

Routing determines how an application should respond to a client's request based on the **endpoint** - the combination of a specific URI (path, e.g. `/` or `/users`), and an HTTP method (e.g. GET or POST).

Initializing a new Express application and defining new routes can be done as shown below:
```node.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // Send a response back to the client
});

app.post('/users', (req, res) => {
    // Do something...
    // Send a response back to the client
});

const port = 8081

app.listen(port, () => console.log(`Listening on port ${port}...`));
```
> Notice that first the express server is created, then routes assigned, and finally the server is told to `listen()` for incoming web traffic.

# Defining route paths

The Express Application (`app`) object contains a collection of methods for defining an application's routes:

- `get()` - to handle `GET` requests
- `post()` - to handle `POST` requests
- `put()` - to handle `PUT` requests
- `delete()` - to handle `DELETE` requests
- `patch()` - to handle `PATCH` requests

All of these methods take two arguments: the path of the route relative to `/` and a callback function that will execute some action and return a response to the user

*Express provides a lot of flexibility with the format of the route path. A route path can be a string, string pattern, regular expression, or an array containing any combination of those as seen below:*
```node.js
let paths = ['/', '/ab+cd', '/a/'];

app.get(paths, (req, res) => {
    // Send response
})
```
The application will send the same response to any `GET` request that matches the string or expressions in the array `routes`.
## Designing routes
When defining your routes, it is important to follow general semantic conventions for the method being used. For example, here are some routes and their meanings for a Twitter-like application:

|Path|HTTP Verb|Meaning|
|---|---|---|
|/tweets|GET|Get an HTML-based list of your tweets|
|/tweets|POST|Create a new tweet|
|/tweets/17|GET|See the details of your tweet with the id of 17|
|/tweets/17|PUT|Update the tweet (17) with the submitted details|
|/tweets/17|DELETE|Delete your tweet with the id of 17|
When read aloud, the purpose of the route should be obvious (e.g. `GET` /tweets will in fact "get the tweets"). Creating your routes with good semantics makes it easier for you and other developers to understand what a route does without having to dig into the code or documentation.

# Handling responses

Each of the routing methods in Express takes two parameters, the first is the path or paths, the second is a function specifying how to respond to that route.

### The callback function

The callback function is called by Express whenever an incoming request matches the route. The function defines two parameters, `req` and `res`, giving you access respectively to the **Request object** and the **Response object**. The Request (`req`) object is used to get details about the client request that's currently being processed. The Response (`res`) object is used to prepare a response to return to the client.

To send a plain text response to the client, call the `res.send()` method passing in the desired content.

For example, when a client makes a `GET` request to your application by browsing to the URL `http://localhost:8081/`, Express could return a plain text response like "Hello from Express!".

```node.js
app.get('/text', (req, res) => {
    res.send('Hello from Express!');
});
```
The `res` object also supports sending JSON back to the client through the `.json()` method:

```node.js
app.get('/json', (req, res) => {
    const resp = {
        property1: "value1",
        property2: "value2"
    };
    res.json(resp);
})
```
This will call `JSON.stringify()` on the input to `res.json()`, thereby serializing it, and it will be the job of the client to deserialize the response to properly interact with it as a JavaScript object.

Remember that these methods are simply matching the HTTP request type. As these types are only semantic, it is up to you to faithfully write code that performs actions according to the request types. For example:
```node.js
const data = {
    users: []
}

// Use POST to add a user
app.post('/users', (req, res) => {
    let newUser = {
        name: 'Phyllis',
        age: 68
    }
    data.users.push(newUser)
    res.send(newUser);
});

// Use GET to retrieve a list of all users
app.get('/users', (req, res) => {
    res.send(users);
})
```
In this example, if you make a `POST` request to `localhost:8081/users`, a new user object would be appended to the `users` property of the `data` object which is then fetched in the `GET localhost:8081/users` route.

> Ideally a database is better for storing data than an object which is only stored in the computer memory (so is lost when the application is stopped). However, that is a topic for another day!


## Testing Express Routes

To test your application, open a terminal or command prompt window, browse to your project's folder, and run the following command:
```terminal
node app.js
```
If your application starts successfully, you'll see the text "Listening on port 8081…" displayed in the terminal or command prompt window. Next, open a web browser and browse to the address `http://localhost:8081/`. You should see the text "Hello from Express!" displayed in the browser if you've been following along.

To test any Express route, start your Express server and use **Postman**, the browser address bar (for GET only), or `fetch` on the browser to make a request to the endpoint that you wish to test.

For example with `fetch` in the browser console, you could test the POST to `/users` shown above:

```node.js
fetch('/users', {
    method: "POST",
    body: JSON.stringify({username: "Demo"}),
    headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));
```
