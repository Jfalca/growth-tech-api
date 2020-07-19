import { Router } from 'express';

import PostController from './app/controllers/PostController';

const routes = new Router();

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);

export default routes;
