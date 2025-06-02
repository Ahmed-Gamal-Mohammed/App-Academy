# Components of an HTTP request
Your browser is designed to be compliant with the HTTP specification, so it knows how to translate your instructions into a well-formatted HTTP request. An important part of the HTTP spec is that it's simple to read.

Here's what the HTTP request looks like for visiting `appacademy.io`:
```
POST / HTTP/1.0
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

username=azure&password=hunter2
```
## Breaking down the request
Time to break down the request into its components!
### Request-line
```
POST / HTTP/1.0
```
This is like the **subject line** of your request. It has 3 parts
- **Method (HTTP Verb):** What action you want to perform (e.g., `GET`, `POST`, `PUT`, `DELETE`).
    - Example: `POST` (used when sending data, like login info).
- **URI (Uniform Resource Identifier):** The "address" of what you're requesting.
    - Example: `/` (means the homepage or "root" of the site).
- **HTTP Version:** The version of HTTP being used (usually `HTTP/1.1` or `HTTP/2`).
*(Translation: "Hey server, I want to **POST** some data to your **homepage** using **HTTP/1.1**.")*

The URI identifies the requested resource. A **resource** can be anything from physical objects to statuses to a kind of information. Some typical resources for a web application include _users_, _posts_, and _likes_. A common term you will see is the _root resource_ or the root of the application which is used when the URI of the request looks like `/`.
### Headers
- The _request-line_ sets the table, but it's the headers that describe the menu! _Headers_ are key/value pairs that come after the _request-line_. They each appear on separate lines and define metadata needed to process the request. The header key or name is case-insensitive, so `Accept-Encoding`, `ACCEPT-ENCODING`, `AcCePt-EnCoDiNg`, or `accept-encoding` are all processed the same by the server.

- These are like **metadata** (extra details) about your request. Each header is a `Key: Value` pair.
#### Common headers:
- **Host:** The website you’re requesting (`appacademy.io`).
- **User-Agent:** Your browser type (e.g., Chrome, Firefox).
- **Accept:** What kind of data your browser can handle (e.g., HTML, images).
- **Content-Type:** The format of the data you’re sending (e.g., `application/x-www-form-urlencoded` for form data).
- **Content-Length:** How long the data you’re sending is.
```
Host: appacademy.io  
User-Agent: Mozilla/5.0 (Chrome)  
Accept: text/html, image/webp  
Content-Type: application/x-www-form-urlencoded  
Content-Length: 31
```
_(Translation: "I’m sending data to `appacademy.io` from Chrome. I can accept HTML and images. The data I’m sending is 31 characters long and is in form format.")_
### Body (Optional )
When you send data to a server (like submitting a form or uploading a file), it can’t always fit in the **headers** or the **URL**. So, we use the **body** of the HTTP request to carry that data.

#### **1. When is the Body Used?**
- When sending **large/complex data** (e.g., login forms, file uploads).
- Common with `POST`, `PUT`, and `PATCH` requests.

**Example:**  
If you fill out a form with:
- Name: _Claire_    
- Age: *29*
- Favorite Ice Cream: _Vanilla_
The body will store this data.
## 5 Common HTTP Verbs
HTTP verbs are a simple way of declaring the intention of the request to the server. They're just like English verbs used when asking for help: "Can you **get** me that?", "Should I **remove** this?", etc. The HTTP verbs determine the `CRUD` operation of the request. **`CRUD`** stands for `Create`, `Read`, `Update` and `Delete`.

HTTP has five commonly used verbs: `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.
1. `GET` is used for **retrieving resources** from the server. A `GET` request is generally how websites are retrieved, and they on;y require that the server return resource.
	- When you go to a link in the browser, the browser makes a `GET` request to the server 
	- These types of requests will never have a body. Any data you need to send in a `GET` request must be shared via the URL 

2.  `POST` is typically used for **creating new resources** on the server 
	- Most of the time, when you submit a from a `POST` request is generated 
	- These types of requests can have a body containing any data the server might need to complete the request, Like Use_name, Password or the contents of your shopping cart 

3. `PUT` requests are used to **update a resource** on the server, These will contain the whole resource you'd like to update 
	- They can have a body containing the data needed to update the resource 
	- For example,when updating your name on a website, a `PUT` request will be generated containing not just your new name but also you used ID, email, etc 

4. `PATCH` requests are also used to **update a resource** on the server, They are very similar to `PUT` requests., but don't require the whole resource to preform the update  
	- They can have a body containing the data needed to update the resource 
	- Keeping with our example of updating your name: a `PATCH` request would only require your new name, not the rest of your account details to succeed

5. `DELETE` requests **destroy resources** on the server 
	-  These requests can have a body, BUT it's traditionally not recommended on include on 
	- These might be saved database records, Like logging a user out of their current session 

**Ultimately, how these verbs get acted upon is up to the server. You could create a server that totally ignores these rules and uses a `DELETE` request to create a resource, but that's only going to confuse your teammates and frustrate you in the future! It's best to use them as the spec intends.**

## `Content-Type` Header
Any header beginning with `Content-` are headers that define **details about the body of the request**. Content headers will only show up on requests that support content in the body, so **`GET` requests should never have any content headers!**

The most important header that you will learn today is `Content-Type` which **lets the server know the format of the request body data and how to process it.**

The values for the `Content-Type` header follow a standard and are called **[MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml#application)** or **media types**. They define how the receiver of the data should format and process the data.

Here are some common MIME types for the `Content-Type` header of a request:

| MIME type                           | meaning                                                        |
| ----------------------------------- | -------------------------------------------------------------- |
| `application/x-www-form-urlencoded` | info submitted directly from an HTML web form                  |
| `application/json`                  | JSON - data format similar to JavaScript objects               |
| `multipart/form-data`               | info submitted from an HTML web form with multiple media types |
### Other Common Headers
The following headers are other common headers that you will see but usually don't need to define yourself because they are set by the browser. You do need to know what the `Content-Type` header does and what its value means, but you do not need to readily know these following headers:

- `Host`: The root path for the URI. This is typically the _domain_ we'd like to request our resource from. As you can see above, the `Host` header for `appacademy.io` is, appropriately, `appacademy.io`!
    
- `User-Agent`: This header displays information about which browser the request originated from. It's generally formatted as `name/version`. You can see in the `User-Agent` header in the example above is using `Chrome/76.0`
    
    > The `User-Agent` has much more content, including references to Mozilla, makers of the popular Firefox browser, and Safari, Apple's default browser of choice. What gives?
    > 
    > There is some [user-agent history](https://security.stackexchange.com/questions/126407/why-does-chrome-send-four-browsers-in-the-user-agent-header) behind those additional references, and you can use [www.useragentstring.com](http://www.useragentstring.com/) for additional details about your current browser's `user-agent`.
    
- `Referer`: This defines the URL you're coming from. There's none in our example since the example navigated directly to the App Academy website, but if you click any link on the page, the resulting HTTP request will have `Referer: https://appacademy.io/` in its headers. Also, you're not reading it wrong - this header is misspelled! It should be "referrer", but it was written incorrectly in the original specification and the typo stuck. Let this be a lesson: your poorly-written code might still be around in 20 years, too!
    
- `Accept`: "Accept-" headers indicate what the client can receive. When we go to most websites, our `Accept` header will be long to ensure we get all the various types of content that site might include. However, we can modify this header in our requests to only get back certain types of data. One common use is setting `Accept: application/json` to get a response in JSON format instead of HTML. You may see variations of this header like `Accept-Language` for internationalized websites or `Accept-Encoding` for sites that support alternative compression formats.