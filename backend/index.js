// app.js

// Require the Express module
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
