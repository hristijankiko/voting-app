'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

require('./api/models/db.js');

require('./api/passport/init.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

// Connect to database


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

var routesApi = require('./api/routes/index');

app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressSession2.default)({
    secret: 'keyboard cat',
    resave: false,
    maxAge: 4 * 60 * 60 * 1000,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false
    }
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.set('view engine', 'pug');
app.set('views', __dirname + '/client');
app.use('/static', express.static(_path2.default.join(__dirname, 'client', 'public')));

app.use('/static', express.static(_path2.default.join(__dirname, 'public')));

app.use('/api', routesApi);

// Init passport authentication


app.get('/*', function (req, res) {
    res.render("index");
});

app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server is listening at port 3000");
});