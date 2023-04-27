import { Router } from 'express';
import gamesRouter from './games.routes.js';

const route = Router();

route.use(gamesRouter);

export default route;