const express = require('express');
const app = express();

const dogsRouter = require("./routes/dogs");
app.use("/dogs", dogsRouter);

require('express-async-errors');

// Serve static files from assets folder
app.use(express.static('assets'));

// Parse incoming JSON request bodies
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  res.on("finish", () => {
    console.log(`Response statusCode: ${res.statusCode}`);
  });

  next();
});

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res) => {
  res.json(req.body);
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!");
});

// 404 handler
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.statusCode = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  let errResponse = {
    message: message,
    statusCode: statusCode
  };

  if (process.env.NODE_ENV !== "production") {
    errResponse.stack = err.stack || null;
  }

  res.status(statusCode).json(errResponse);
});

// Start server
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
