- A *Server* usually  doesn't just send one kind or response
- Routes are used to ask the server for different kinds of information 
- To get the server to send information based on specific routes you need to create different route handlers that will tell the server to send different responses.
## Defining a Route Handler
- A *route handler* is a set of code that will be executing for a particular route or request method and URL path combination
- A response formulated and sent by one route handler will be different from the another route handler 
- in `http` you can create a route handler by simply using a conditional to check if the `method` and the `URL` properties on the `req` match a route. 
	- if the route matches, then create formulate the route-specific response 
- to create a route handler for a `GET` request with a URL path of `/` that sends a plain text, `Splash Page`, with a status code of `200` :
```node.js
const http = require("http");
const server = http.createServer((req,res) =>{

	if(req.method == 'GET' && req.url == '/'){
		res.statusCode = 200;
		res.setHeader('Content-Type',"text/plain");
		return res.end("Splash Page");
	}
});

```
The server will send a response with the body of `Splash Page` only if the request has a method of `GET` and a URL path of `/`

## Multiple Route Handlers
To add more route handlers, simply add more conditionals in `http` to check for different `method`  and `URL` combinations

```JS
const http = require("http");

const server = http.createServer((req,res) =>{

	if(req.method === 'GET' && req.url === '/'){
		res.statusCode = 200;
		res.setHeader("Content-Type","text/plain");
		return res.end("Splash Page");
	}

	if(req.method === "POST" && req.url ==="cat"){
		res.statusCode = 201;
		req.setHeader("Content-Type","plain/text");
		return res.end("Created a Cat!");
	}
});
```

