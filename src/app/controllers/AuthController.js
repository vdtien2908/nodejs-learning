class AuthController {
    // [GET] /login
    index(req, res) {
        res.render('pages/auth/login', { layout: './layouts/login-layout' });
    }
}

export default new AuthController();
