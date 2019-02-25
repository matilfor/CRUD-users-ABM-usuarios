const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const http = require('http');
const port=process.env.PORT || 3000
const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

path.join();

app.use("/api", apiRoutes);
app.use("/", indexRoutes);

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, function () {
  console.log(`Server running at port `+ port);
});

module.exports = app;