"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401);
    res.json({
        error: "authentication required"
    });
}

exports.default = authenticationMiddleware;