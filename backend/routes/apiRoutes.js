const express = require('express')
const router = express.Router();
const path = require('path');

router.get("/users", function(req, res){
    res.json(path.join(__dirname, "..", "", "test.html"));
});