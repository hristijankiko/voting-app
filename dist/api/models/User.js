'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var userSchema = new _mongoose2.default.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function (next) {
    var user = this;

    // Only hash if the password is modified or new
    if (!user.isModified('password')) return next();

    // Generate a salt
    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // Hash the password along with the new salt
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // Override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.methods.validPassword = function (candidatePassword) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return err;
        console.log(isMatch);
        return isMatch;
    });
    return true;
};

_mongoose2.default.model('User', userSchema);