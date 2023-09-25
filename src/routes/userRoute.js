import express from 'express';
const route = express.Router();

import UserController from '../app/controllers/UserController';

route.get('/', UserController.index);
route.get('/create', UserController.create);

export default route;
