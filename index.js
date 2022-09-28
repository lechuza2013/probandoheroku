"use strict";
exports.__esModule = true;
var express = require("express");
require("dotenv/config");
var app = express();
var port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.NODE_ENV
    });
});
app.get("/db-env", function (req, res) {
    res.json({
        "db-host": process.env.DB_HOST
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola? XD, my name is heroku"
    });
});
app.listen(port, function () {
    console.log("Express corriendo en el puerto: ", port);
});
