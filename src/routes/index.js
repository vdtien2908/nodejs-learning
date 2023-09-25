import homeRoute from './homeRoute';
import aboutRoute from './aboutRoute';
import userRoute from './userRoute';

function route(app) {
    app.use('/', homeRoute);
    app.use('/about', aboutRoute);
    app.use('/user', userRoute);
}

export default route;
