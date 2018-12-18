const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/ping', function(req, res){
    res.send('pong');
});

router.get("/users/new", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get("/api/users/test", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "test.html"));
});

router.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "users.html"));
});

module.exports = router;
