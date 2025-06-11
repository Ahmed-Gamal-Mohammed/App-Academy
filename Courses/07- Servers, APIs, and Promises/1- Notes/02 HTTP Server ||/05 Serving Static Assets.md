## What is a static asset?
A **static asset** is some data or resource that doesn't change no matter how many times you ask the server for it. It's usually just a file that the server holds in memory and sends to a client when asked for.

A **static asset** is any file that is served by a web server **without being dynamically generated or modified**. These files remain **unchanged** across requests and are usually **pre-written** and stored on the server or in a content delivery network (CDN).

### Common Examples:

- **HTML** files (if not rendered dynamically)
    
- **CSS** stylesheets
    
- **JavaScript** files
    
- **Images** (e.g., `.jpg`, `.png`, `.gif`)
    
- **Fonts** (e.g., `.woff`, `.ttf`)
    
- **Videos** and **audio** files
### Serving Static Assets
When a static asset is requested:
- The client (browser) sends an HTTP GET request.
    
- The server looks for the file on the disk (or cache) and sends it directly, without changing it.
    
- The **URL path** usually ends with the **file name and extension**, e.g.:
    - `/styles/main.css`
        
    - `/scripts/app.js`
        
    - `/images/dog.jpg`
Static assets are often served from a public directory in your project, like:
```bash
/public
  /images
  /css
  /js
```
## Serve Static Assets in http
A static asset is a file that a server holds in memory. The contents don't change and the asset can be requested and sent by the server.

In this article you will learn how to:
- Find and read files using the `fs` library
- Send a static asset from a server using the `http` library
### Finding and Reading Files
To find and read a file in memory, you can use the built-in `fs` Node.js library. [`readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) is a method in the library that takes in a file path and returns the contents of the file at that path. If you pass in a string of `utf-8` as a second argument, then the file contents can be read as a string.

```JS
const fs = require('fs');

const fileContents = fs.readFileSync('./file-name.txt', 'utf-8');
```
The file path is the relative file path from the current file to the desired file, or an absolute path. Relative file paths are usually preferred.

*If the file is not found, the method will throw an error.*
### Sending Files
To send a file as a static asset in your `http` server as a response, you can write the contents of a file that you read as the body of the response. Then, set the appropriate status code. Finally set the `Content-Type` header specific for the file.

For example, if you want to send a `png` image as the response from your server:
```node.js
const server = http.createServer((req, res) => {
  const catImage = fs.readFileSync('./images/cat.png');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.end(catImage);
});
```
