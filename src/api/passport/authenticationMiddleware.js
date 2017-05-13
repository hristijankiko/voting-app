function authenticationMiddleware(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.status(401);
    res.json({
        message: "Authentication required",
    });
}

export default authenticationMiddleware;