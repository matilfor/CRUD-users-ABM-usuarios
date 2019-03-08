/* Module dependencies.*/
/* Express is a NodeJS web application server framework */
const express = require('express');
/* This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
It's a piece of express middleware that reads a form's input and stores it as a js object accessible through req.body */
const bodyParser = require('body-parser');
/* app is an object of the Express module */
const app = express();
/* The path module provides utilities for working with file and directory paths */
const path = require("path");
/* Use the HTTP server and client */
const http = require('http');
/* Get port from environment and store in Express */
const port = process.env.PORT || 3000
/* Create the routes */
const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes');
/* Add the body parser middleware to the global processing stack */
/* Returns middleware that only parses json */
app.use(bodyParser.json());
/* Returns middleware that only parses urlencoded bodies. Accepts only UTF-8 encoding of the body */
app.use(bodyParser.urlencoded({ extended: true }));
/* This method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.*/
path.join();
/* Mount the middleware function to a specified path. The middleware function is executed when the base path matches.
ApiRoutes returns .json objects */
app.use("/api", apiRoutes);
/* IndexRoutes returns html that the user can see */
app.use("/", indexRoutes);
/* Joins the specified path segments into one path.*/
app.use(express.static(path.join(__dirname, "/public")));
/* Listens for connections on the given path (port 3000, in this case) */ 
app.listen(3000, function () {
  console.log(`Server running at port `+ port);
});
/* Export the 'app' module so it can be used in other files */
module.exports = app;