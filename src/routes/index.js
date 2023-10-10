import homeRoute from './homeRoute';
import aboutRoute from './aboutRoute';
import userRoute from './userRoute';

import AuthController from '../app/http/controllers/AuthController';
import AuthMiddleware from '../app/http/middleware/AuthMiddleware';

function route(app) {
    // Login
    app.get('/login', AuthController.index);
    app.post('/login', AuthController.login);
    app.get('/logout', AuthMiddleware.isLogin, AuthController.logout);

    // About
    app.use('/about', AuthMiddleware.isLogin, aboutRoute);

    // User
    app.use('/user', AuthMiddleware.isLogin, userRoute);

    // Home
    app.use('/', AuthMiddleware.isLogin, homeRoute);

    // The 404 Route
    app.get('*', function (req, res) {
        res.send('Lỗi không tìm thấy trang', 404);
    });
}

export default route;
