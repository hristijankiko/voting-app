import mongoose from 'mongoose';
import passport from 'passport';

let User = mongoose.model('User');

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

export function login(req, res) {
    sendJsonResponse(res, 200, {
        username: req.user.username
    })
}

export function register(req, res) {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }, function(err, user) {
        if(err) {
            console.log(err);
            sendJsonResponse(res, 300, err);
            return;
        }

        console.log("Authenticationg");
        req.login(user, function(err) {
            if(err) {
                console.log(err);
                sendJsonResponse(res, 300, err);
                return;
            }
            sendJsonResponse(res, 200, {username: req.user.username});
        })
    });
}

export function logout(req, res) {
    req.logout();
    sendJsonResponse(res, 200, {success: true});
}