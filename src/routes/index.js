import homeRoute from './homeRoute';
import aboutRoute from './aboutRoute';
import userRoute from './userRoute';

import AuthController from '../app/controllers/AuthController';

function route(app) {
    app.use('/', homeRoute);
    // Login
    app.get('/login', AuthController.index);
    app.post('/login', AuthController.login);
    app.use('/about', aboutRoute);
    app.use('/user', userRoute);
}

export default route;
