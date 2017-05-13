'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.register = register;
exports.logout = logout;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var sendJsonResponse = function sendJsonResponse(res, status, content) {
    res.status(status);
    res.json(content);
};

function login(req, res) {
    sendJsonResponse(res, 200, {
        username: req.user.username
    });
}

function register(req, res) {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            if (err.code === 11000) {
                if (String(err.message).search(/index: email/g) != -1) {
                    sendJsonResponse(res, 300, { error: true, message: "Email already exists" });
                    return;
                } else if (String(err.message).search(/index: username/g) != -1) {
                    sendJsonResponse(res, 300, { error: true, message: "Username already exists" });
                    return;
                }
            } else {
                sendJsonResponse(res, 300, err);
            }
            return;
        }
        req.login(user, function (err) {
            if (err) {
                console.log(err);
                sendJsonResponse(res, 300, err);
                return;
            }
            sendJsonResponse(res, 200, { username: req.user.username });
        });
    });
}

function logout(req, res) {
    req.logout();
    sendJsonResponse(res, 200, { success: true });
}