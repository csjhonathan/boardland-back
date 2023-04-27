import { Router } from 'express';
import gamesRouter from './games.routes.js';
import authRouter from './auth.routes.js';

const route = Router();

route.use(gamesRouter);
route.use(authRouter);

export default route;