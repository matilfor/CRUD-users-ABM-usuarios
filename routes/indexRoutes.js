const express = require('express')
const router = express.Router();
const path = require('path');

router.get("/users/new", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "..", "", "index.html"));
});

router.get("/users/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "", "edit.html"));
  });

module.exports = router;
