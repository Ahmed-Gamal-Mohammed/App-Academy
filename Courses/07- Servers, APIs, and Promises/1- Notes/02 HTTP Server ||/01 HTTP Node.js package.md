In this article, you will learn how to create a Node.js server in a built-in package called `http`. You will be able to:
- Create a server
- Make the server listen for request on a specified port
- Become familiar with the `Request` object to interact with components of the request
- Become familiar with the `Response` object to formulate and send a response
#  Creating a Server
- To create a server using `http` , first import the built-in `http` package in any Node.js file.
- Then, call the `createServer` method on the import and pass in a function as a single argument 
- This function should accept two parameters, a `Request` object and a `Response` object
- There will be more details on those objects later, but by convention, the names of those parameters are shortened to `req`(for request) and `res` (for response)

Here's an example of how to create a server in Node.JS
```Node.js

// server.js

const http = require("http");

const server = http.createServer((req,res) =>{
	// ...
})
```

If you run this file now, nothing will really happen yet because the server isn't connected to your network to listen for incoming requests and send outgoing responses.
#  Listening for Requests on a Port
To connect your newly created sever to you local network , you need to make the server listen for requests on a specific port in your network

First, define the port number and assign it to a variable called `port`. Port number can range from `0` to `65535` but some ports are reserved so it's best to use ports that are conventionally used for development purposes 

**Common development port numbers to use are `3000`, `5000`, and `8000`**

Next, use the `listen` method on the newly created `server` and pass in two arguments. The first is the `port`, and the second  is a `callback function` The callback function will run once the server connection to the port is successful. Common practice is to log a message to the console saying that the server is connected and listening on the specified `port`

Here's an example of this:
```Node.js

// server.js

const http = require("http");

const server = http.creatServer((req,res)=>{
	// ...
});

const port = 5000;

servre.listen(port, ()=> console.log("Server is listening on port",port));
```

# `Request` object
When a server gets a request, `http` will create a `Request` object that holds methods and properties to interact with the components of the request. To examine the contents of the `Request` object, you will need to do two things:

1. Log the `req` parameter in the `createServer` function
2. Make any request to [http://localhost:5000](http://localhost:5000) using your browser or Postman

```node.js
const server = http.createServer((req,res) =>{
	console.log(req);
});
```

There are only a few properties and methods that you will be using:

- `method` - Property whose value is a string of the method of the request
- `url` - Property whose value is a string is the url path of the request
    - For example, for a request to [http://localhost:5000/hello-world](http://localhost:5000/hello-world), the `url` will be a string of `/hello-world`.
- `headers` - Property whose value is an object with the key-value pairs as the header names and values
- `on` - Method that listens for an event on the request and triggers a callback function to run when that event is triggered

The `method`, `url`, and `headers` properties will be used to identify the route of the request and formulate a response based on that route.

The `on` method will be used to parse the body of the request
# `Response` object
To formulate a response to send, `http` will create a `Response` object with every request made to the server. This object also has properties and methods to interact and formulate the components of a response. To examine the contents of the `Response` object, you will need to do similar steps as examining the `Request` object:

1. Log the `res` parameter in the `createServer` function
2. Make any request to [http://localhost:5000](http://localhost:5000) using your browser or Postman
```node.js
const server = http.createServer((req, res) => {
  console.log(res);
});
```
Examine your terminal. You should see another massive object.

There are only a few properties and methods on `res` that you will be using:

- `statusCode` - Property whose value is the status code of the response
- `setHeader` - Method that sets a header name to a value
- `write` - Method that allows you to add to the body of the request
- `end` - Method that allows you to add to the body of the request _AND_ send the response
