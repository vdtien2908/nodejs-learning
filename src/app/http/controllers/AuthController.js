import UserModel from '../../models/UserModel';

class AuthController {
    // [GET] /login
    index(req, res) {
        res.render('pages/auth/login', { layout: './layouts/login-layout' });
    }

    // [POST] /login
    async login(req, res) {
        const { email, password } = req.body;
    }

    // POST /login
    async login(req, res, next) {
        const { email, password } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!email || !password) {
            console.log('Chưa nhập tài khoản hoặc mật khẩu');
            return;
        }

        try {
            const user = await UserModel.findOne('email', email);
            if (user && user.password === password) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    user_name: user.full_name,
                    role: user.role,
                };
                res.redirect('/');
            } else {
                res.send('Email hoặc mật khẩu không đúng');
            }
        } catch (error) {
            next(error);
        }
    }

    // [GET] /logout
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/login');
            }
        });
    }
}

export default new AuthController();
