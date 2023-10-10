import express from 'express';
const route = express.Router();

import HomeController from '../app/http/controllers/HomeController';

route.get('/', HomeController.index);

export default route;
