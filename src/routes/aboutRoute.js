import express from 'express';
const route = express.Router();

import AboutController from '../app/http/controllers/AboutController';

route.get('/', AboutController.index);

export default route;
