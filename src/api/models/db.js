import mongoose from 'mongoose';

let dbURI = 'mongodb://localhost/voting-app';

if(process.env.NODE_ENV === 'production'){
  dbURI= "mongodb://"+ process.env.MLAB_USERNAME +":"+ process.env.MLAB_SECRET +"@ds113938.mlab.com:13938/short-url";
};

mongoose.Promise = global.Promise;

mongoose.connect(dbURI)
    .catch(err => {
        console.log(err);
    });

// Connection events
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

import './Poll.js';
import './User';

// var User = mongoose.model("User");
// var testUser = new User({
//     username: 'hristijankiko',
//     password: '123456',
//     email: 'hristijan_kiko123@hotmail.com'
// });

// testUser.save(function(err, user) {

// });