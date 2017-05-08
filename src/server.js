import bodyParser from 'body-parser';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
let express = require('express');
let app = express();

// Connect to database
import './api/models/db.js';

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

let routesApi = require('./api/routes/index');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ 
    secret: 'keyboard cat', 
    resave: false, 
    maxAge : (4 * 60 * 60 * 1000),
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false
    } 
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');
app.set('views', __dirname + '/client');
app.use('/static', express.static(path.join(__dirname, 'client', 'public')))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api', routesApi);

// Init passport authentication
import './api/passport/init.js';

app.get('/*', function(req, res){
    res.render("index");
});

app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server is listening at port 3000");
});