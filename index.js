"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var APP_PORT_URL = 3000;
console.log(process.env);
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola? XD"
    });
});
app.listen(APP_PORT_URL, function () {
    console.log("Express corriendo en el puerto: ", APP_PORT_URL);
});
