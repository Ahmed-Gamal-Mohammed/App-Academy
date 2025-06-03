in this article you will learn more about how to formulate a response in an `http` server by:
 - Setting the status code of the response 
 - Setting a header on the server 
 - Writing to the body of the response 
 - Sending the response 
# Set the status code 

To set the status code of the response, set the `statusCode` property on the `res` object inside the `createServer` function to the desired code.

For example, to set the status code of the response to `500` for every request that comes into the server
```node.js

const server = http.createServer((req,res) =>{
	res.statusCode = 500;
});
```

# Set The Header 

To set  a header of the response, use the `setHeader` method on the `res` object inside of the `createServer` function, pass in the header name as the first argument and the header value as the second argument 

For example, to set the `content-type` header of the response to `text/css` for every request that comes into the server:

```node.js

const server = http.createServer((req,res)=>{
	res.setHeader("Content-Type","text/css");
})
```

# Write the response body 
- There are two ways to add to the body of the response
- One way to do this is using the `write` method on the `res` inside of the `createServer` function 
- The `Wrtie` method doesn't set the body of the response, it adds to the body of the response 
- You can call this method multiple times on the same `res` object ti continuously add to the body.

Pass the text you wish to send as the body inside of the `write` method to _add_ to the body of the response.

For example, to write `Hello World!` text to the body of the response, you can either pass in the full string into `write`, or separate it out into multiple `write` method calls like so:

```node.js
const server = http.createServer((req, res) => {
  res.write('Hello');
  res.write(' ');
  res.write('World');
  res.write('!');
});
```
# Sending the response 
The second way to add to the body of the response is the `end` method on the `res` object. The `end` method also doesn't set the body of the response, but _adds_ to the body. The `end` method has one more functionality though. Which is to end the creation of the response and send it.

Also, since only one response can be sent for a single request, **you cannot call the `end` method multiple times for a single request**.

To add `Hello World!` to the body of a response using `write` and `end` then send the response right after:
```node.js

const server = http.createServer((req, res) => {
  res.write('Hello');
  res.write(' ');
  res.write('World');
  res.end('!');
});
```

You can also choose not to pass in any arguments into the `end` method to finish sending the response.

For example, to send a response with the status code of `200` without any body:
```node.js

const server = http.createServer((req, res) => {
  res.status = 200;
  res.end();
});
```

# Hanging Server

If there is no response returned for a request made to the server, the server becomes a **hanging server**. This means that the server becomes unresponsive and cannot take anymore requests unless the client quits the connection for the original request. So make sure you are always sending a response for all your requests to your `http` server even if you have to send an error response!
