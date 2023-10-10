class AuthMiddleware {
    // Middleware check login
    isLogin(req, res, next) {
        if (req.session && req.session.user) {
            next();
        } else {
            res.redirect('/login');
        }
    }
}

export default new AuthMiddleware();
