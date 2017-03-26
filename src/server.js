import bodyParser from 'body-parser';
import path from 'path';
let express = require('express');
let app = express();
let path = require('path');


// Connect to database
import './api/models/db.js';

let routesApi = require('./api/routes/index');

app.set('view engine', 'pug');
app.set('views', __dirname + '/client');
app.use('/static', express.static(path.join(__dirname, 'client', 'public')))

<<<<<<< HEAD
=======
app.use('/static', express.static(path.join(__dirname, 'public')))
>>>>>>> 19298b0756991e03f30443f33193d091794bb672
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routesApi);

app.get('/', function(req, res){
    res.render("index");
});

app.listen(3000 || process.env.PORT, function(req, res){
    console.log("Server is listening at port 3000");
});