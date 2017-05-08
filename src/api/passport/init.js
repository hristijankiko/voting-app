import mongoose from 'mongoose';
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model("User");

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      user.comparePassword(password, function(err, isMatch) {
        if(!isMatch) {
            console.log("Incorrect")
            return done(null, false, { message: 'Incorrect password.' });
        }
        console.log("Successful login", user.username);
        return done(null, user);
      }) 
    });
  }
));

passport.serializeUser(function(user, done) {
    console.log("serializing");
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  console.log("Deserializing");
  User.findById(_id, function (err, user) {
    done(err, user);
  });
});