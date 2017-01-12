let express = require('express');
import bodyParser from 'body-parser';
let app = express();

// Connect to database
import './api/models/db.js';

let routesApi = require('./api/routes/index');

app.set('view engine', 'pug')
app.set('views', './dist/client');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routesApi);

app.get('/', function(req, res){
    res.render("index");
});

app.listen(3000 || process.env.PORT, function(req, res){
    console.log("Server is listening at port 3000");
});