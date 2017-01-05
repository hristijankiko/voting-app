'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('./api/models/db.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var app = express();

// Connect to database


var routesApi = require('./api/routes/index');

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/api', routesApi);

app.get('/', function (req, res) {
    res.send("Show all polls");
});

app.listen(3000 || process.env.PORT, function (req, res) {
    console.log("Server is listening at port 3000");
});