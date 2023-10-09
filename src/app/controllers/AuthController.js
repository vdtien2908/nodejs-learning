import UserModel from '../models/UserModel';

class AuthController {
    // [GET] /login
    index(req, res) {
        res.render('pages/auth/login', { layout: './layouts/login-layout' });
    }

    // [POST] /login
    async login(req, res) {
        const { email, password } = req.body;
    }
}

export default new AuthController();
