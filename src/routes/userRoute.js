import express from 'express';
const route = express.Router();

import UserController from '../app/http/controllers/UserController';

route.get('/', UserController.index);
route.get('/create', UserController.create);
route.post('/create', UserController.store);
route.get('/:id/edit', UserController.edit);
route.post('/:id/edit', UserController.update);
route.post('/:id/delete', UserController.delete);

export default route;
