import { Router } from 'express';
import { authValidation } from '../middlewares/authValidation.middleware.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { newPurchase } from '../controllers/purchase.controller.js';
import purchaseSchema from '../schemas/purchase.schema.js';

const purchaseRouter = Router();

purchaseRouter.use(authValidation);

purchaseRouter.post('/purchase', validateSchema(purchaseSchema), newPurchase);

export default purchaseRouter;
