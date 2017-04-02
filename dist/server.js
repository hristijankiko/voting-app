'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('./api/models/db.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

// Connect to database


var routesApi = require('./api/routes/index');

app.set('view engine', 'pug');
app.set('views', __dirname + '/client');
app.use('/static', express.static(_path2.default.join(__dirname, 'client', 'public')));

app.use('/static', express.static(_path2.default.join(__dirname, 'public')));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/api', routesApi);

app.get('/', function (req, res) {
    res.render("index");
});

app.listen(3000 || process.env.PORT, function (req, res) {
    console.log("Server is listening at port 3000");
});