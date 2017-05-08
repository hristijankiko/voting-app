'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('./Poll.js');

require('./User');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbURI = 'mongodb://localhost/voting-app';

if (process.env.NODE_ENV === 'production') {
    dbURI = "mongodb://" + process.env.MLAB_USERNAME + ":" + process.env.MLAB_SECRET + "@ds113938.mlab.com:13938/short-url";
};

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(dbURI);

// Connection events
_mongoose2.default.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
_mongoose2.default.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});


// var User = mongoose.model("User");
// var testUser = new User({
//     username: 'hristijankiko',
//     password: '123456',
//     email: 'hristijan_kiko123@hotmail.com'
// });

// testUser.save(function(err, user) {

// });
_mongoose2.default.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});