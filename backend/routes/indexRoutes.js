const express = require('express')
const router = express.Router();
const path = require('path');

router.get("/users/new", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "users.html"));
});

module.exports = router;
