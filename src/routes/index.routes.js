import { Router } from 'express';
import gamesRouter from './games.routes.js';
import authRouter from './auth.routes.js';
import purchaseRouter from './purchase.routes.js';
import cartRouter from './cart.routes.js';

const route = Router();

route.use(gamesRouter);
route.use(authRouter);
route.use(purchaseRouter);
route.use(cartRouter);

export default route;