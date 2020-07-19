import { Router } from 'express';

import PostController from './app/controllers/PostController';

const routes = new Router();

routes.get('/posts', PostController.index);

export default routes;
