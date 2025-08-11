# What is Middleware in Express ? 
*Middleware* in express is just a *Function* that runs between when the server receives a request (*req*) and when it sends a response(*res*)

## You can use middleware to:
- Log info

- add data to the request 

- Modify the response 

- Check user authentication 

- and more!

## Structure of Middleware Function 
A Middleware function always has 3 parameters 
```js
(req,res,next) =>{
	// do something 
	next();
}
```

- `req` : The request object (info from the client)

- `res` : The response object (used to send data back)

- `next` : A function that calls the next middleware

## Important concept : Express is a *Series of middleware calls*

#### *This means every time a request comes in, Express checks your middleware one by one, in the order you wrote them, and runs them*

### Example 1: Simple middleware to Log Time 
Let's make a middleware function that logs the current time:
```js
const logTime = (req,res,next) =>{
	console.log("Current time: ", new Date().toISOString());
	next();
}
```

now let's use it in our route:
```js
app.get("/",logTime,(req,res) =>{
	res.send("Hello World!");
});
```

So when you visit `/` , this is what happens :
1. `LogTime` runs --> logs the time

2.  Then `next()` moves to the next function

3. That next function sends back `hello world!`

### Example 2: Passing Data between Middleware
let's create another middleware that adds a message to the request 
```js
const passOnMessage = (req,res,next) =>{
	req.passedMessage = "Hello form passOnMessage!";
	console.log("Passing on a message!");
	next();
}
```
Update your route like this: 
```js
app.get("/",logTime,passOnMessage,(req,res) =>{
	console.log("passed Message: ", req.passedMessage);
	res.send("Hello World!");
});
```
### What happens here: 
1. `LogTime` runs -> logs the time 

2. `PassOnMessage` runs -> adds `passedMessage` to `req`

3. The final handler logs `req.passedMessage` and sends back the response 

> **You can pass data between middleware using `req` object**

## Alternative Way: Pass Middlewares in an Array

instead of this: 
```js
app.get("/',logTime,passedOnMessage, handler);
```

You can do:
```js
app.get("/",[logTime,passedOnMessage],handler);
```
Both ways work the same,The array is useful when you have many middleware functions

## Application-level Middleware
So far, Middleware only runs for the routes you attach it to. For example 
```js
app.get("/",logTime,handler); // logTime runs only for "/"
```

but what if you want to `logTime` to run for every route?

User `app.use()` to add middleware globally:
```js
app.use(logTime); // This runs for every route 
```

Now even this route will log the time 
```js
app.get("/bye", (req,res) =>{
	res.send("Bye world.");
});
```

## Final code breakdown
```js
const express = require("express");
const app = express();

// Middleware that logs the current time 
const logTime = (req,res,next) =>{
	console.log("Current Time: ", new Date().toISOString());
	next();
};

// Global middleware for all routes
app.use(logTime);

// Middleware that passes a message 
conse passOnMessage = (req,res,next) =>{
	console.log("Passing on a message!");
	req.passedOnMessage = "Hello from passedOnMessage!";
	next();
};

// Route: localhose:3000/
app.get("/", passedOnMessage, (req,res) =>{
	console.log("Passed Message: ", req.passedOnMessage);
	res.send("Hello World!");
});

// Route: localhose:3000/bye
app.get("bye", (req,res) =>{
	res.send("Bye world!");
});

// Start the server 
app.listen(3000, () =>{
	console.log("Listening on port 3000...");
});
```

# Express Middleware Flow Diagram
When working with middleware and error handling middleware in Express, it can be quite useful to have a flow diagram for the possible paths.  
Not only does this help with implementation, but it can also with testing to make sure all paths have been followed. 
Additionally, a diagram can help developers when joining a project that already has an Express server

## How to read a flow diagram 
Start at the top of the image and follow the arrows.
- Each use of `next()` flows to the next middleware function
- `next(err)` flows to the next error handling middleware function
- Calling a response function (represented by `res.end()`) will cause the app to send a response back to the caller
The symbols have specific meanings
- Middlewares are represented by diamonds because they are decision points - one or more arrows flow in, and two or more flow out.
- - Error handling middlewares are represented by slanted rectangles (a.k.a. parallelograms) because they are procedures that determine what to do with an error - either send a response or continue to flow through the middleware chain.
- - Starting points are drawn using rounded corner rectangles with one arrow out.
- - Ending points are drawn using rounded corner rectangles with one arrow in.

Color coding can be helpful, but is not required.
## Sample diagram
![[express-middleware-chain.png]]