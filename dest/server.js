'use strict';

var express = require('express');
var app = express();

var routesApi = require('./api/routes/index');

app.use('/api', routesApi);

app.get('/', function (req, res) {
    res.send("Show all polls");
});

app.listen(3000 || process.env.PORT, function (req, res) {
    console.log("Server is listening at port 3000");
});