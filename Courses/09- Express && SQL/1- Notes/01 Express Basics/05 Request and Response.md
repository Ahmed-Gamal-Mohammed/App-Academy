d# The Request Object `req`
That being said, the `req` object in Express unsurprisingly contains a lot of the same/similar properties as it's `http` counterpart (e.g. `req.method` exists for both `http` and Express). 

**However, Express also contains some new properties and methods that simplify common tasks and introduce new functionalities.**

## Here are some important ones:
|Property/Method|Value/Function|
|---|---|
|`req.body`|The parsed body of the request|
|`req.query`|Object containing query string parameters|
|`req.params`|Object containing named route parameters|

### `req.body`

The body of an incoming request will be parsed and made available for use in the `req.body` property of the request object. It can be parsed from JSON as long as the header `Content-Type` of the request is of type `application/json`, and the body contains a JSON string with the data coming from the client.

Express will do this for you automatically if you configure it to do so with `express.json()`.

For example, say you have a client and server built like the following:
```js
// Client sending request
const data = {
    firstName: 'John',
    lastName: 'Adams'
};

fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data);
})
```

```js
// app.js 
const express = require('express');
const app = express();

// This line allows the body of a request to be parsed into the req.body object
app.use(express.json());

// Server side handling
app.post('/users', (req, res) => {
    console.log(req.body);      
})
```

`{ firstName: 'John', lastName: 'Adams' }` will be printed in your terminal when the request is made.
### `req.query`

Express can parse query strings for you within a request and place them in the form of an object in `req.query`. Query strings are attached to a url using `?`. Each variable is assigned a value using `=`. Variables are separated using `&`.

For example, if you made the `fetch` request:
```js
fetch('http://localhost:4000/users?firstName=John&lastName=Adams', {
    method: 'GET'
})
```
And had a server handling this request like so:
```js
// Server side handling
app.get('/users', (req, res) => {
    console.log(req.query.firstName);      
    console.log(req.query.lastName);
})
```
You would see the following in your terminal:
```terminal
John
Adams
```
### `req.params`
Finally, Express also supports named route parameters. This means that a chunk of your URL can be parameterized and read conveniently through `req.params`. This is what sending `John Adams` would look like using `req.params`.

```js
fetch('http://localhost:4000/users/John/Adams', {
    method: 'POST'
})
```

```js
// Server side handling
app.post('/users/:firstName/:lastName', (req, res) => {
    console.log(req.params.firstName);   // John   
    console.log(req.params.lastName);    // Adams
})
```

The route pattern shown above means that Express is expecting two more levels in the path that are to be interpreted as `firstName` and `lastName`. These can then be read using `req.params` object.

# The Response Object `res`
Similar to the `http` counterpart, the `res` object contains properties and methods that allow you to formulate, manipulate, and send a response back to the client.

|Property/Method|Value/Function|
|---|---|
|`res.status()`|Set the HTTP status code of the response|
|`res.send()`|Send plaintext response to the client|
|`res.json()`|Send response in the form of JSON to the client|
These methods are examples of how Express wraps a lot of manual processes into easy to use interfaces. `res.send()` and `res.json()` essentially do the same functionality, except send different types of data back to the client.

Using `http` servers, this process is a lot more verbose. The `res.end()` method of `http.serverResponse` is called at the end of both `res.send()` and `res.json()`'s implementations so you won't have to call it yourself.

Status codes can easily be set using the `res.status()` method and can be chained with `res.send()` and `res.json()` to be even more succinct like so:

```js
// app.js
const users = [
    {
        firstName: 'John',
        lastName: 'Adams'
    },
    {
        firstName: 'Thomas',
        lastName: 'Jefferson'
    },

]

app.get('/users', (req, res) => {
    try {
        // Process request data
        res.status(200);
        res.json(users);
    } catch(e) {
        // On failure
        res.status(500);
        res.send("Failed to POST to /users");
    }
})
```
