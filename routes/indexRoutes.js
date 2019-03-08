/* This file defines the routes that the user is going to access in order to receive from and send information
to the server */
/* Use Express framework */
const express = require('express');
/* Router middleware groups the route handlers for a particular part of a site together to access them 
using a common route-prefix. */
const router = express.Router();
/* The path module provides utilities for working with file and directory paths */
const path = require('path');
/* Defining the 'new', 'users' and 'edit' routes using the Router.get() method, 
which responds only to HTTP GET requests. */
router.get("/users/new", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "index.html"));
});

router.get("/users/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "", "edit.html"));
  });

/* Export the 'router' module so it can be used in other files */
module.exports = router;
