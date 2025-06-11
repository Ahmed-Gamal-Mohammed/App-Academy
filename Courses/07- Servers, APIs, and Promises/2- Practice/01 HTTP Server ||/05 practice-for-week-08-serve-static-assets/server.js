const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  const cssFilePath = fs.readFileSync("assets/css/application.css");
  const imagePath = fs.readFileSync("assets/images/dog.jpg"); // ✅ no utf-8
  const htmlFilePath = fs.readFileSync("./index.html", "utf-8");

  if (req.method === 'GET' && req.url.startsWith('/static/')) {
    const url_parts = req.url.split('/');
    let file_extension = url_parts[3];
    file_extension = file_extension.split('.').pop();

    if (url_parts.length === 4 && url_parts[1] === 'static') {
      if (file_extension === 'css') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(cssFilePath);
      }

      if (file_extension === 'jpg') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        return res.end(imagePath); // ✅ now it sends a valid image
      }
    }
  }

  if (req.method === 'GET' && req.url.startsWith('/')) {
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html"); // ✅ fixed typo
    return res.end(htmlFilePath);
  }
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
