import express from 'express';
const route = express.Router();

import AboutController from '../app/controllers/AboutController';

route.get('/', AboutController.index);

export default route;
