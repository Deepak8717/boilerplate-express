var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Hello Express");
});

module.exports = app;
console.log("Hello World");
