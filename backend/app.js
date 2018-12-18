const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const indexRoutes = require('./routes/indexRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRoutes);

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, function () {
  console.log('server listening...')
});