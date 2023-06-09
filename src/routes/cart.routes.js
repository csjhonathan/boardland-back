import { Router } from 'express';
import { authValidation } from '../middlewares/authValidation.middleware.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { updateCart, getUserCart, syncrhonyzeCart } from '../controllers/cart.controller.js';
import cartSchema from '../schemas/cart.schema.js';

const cartRouter = Router();

cartRouter.use(authValidation);

cartRouter.post('/cart', validateSchema(cartSchema), updateCart);
cartRouter.get('/cart', getUserCart);
cartRouter.put('/cart', syncrhonyzeCart);
export default cartRouter;
