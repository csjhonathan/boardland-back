import { Router } from 'express';
import { authValidation } from '../middlewares/authValidation.middleware.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import purchaseSchema from '../schemas/purchase.schema.js';

const purchaseRouter = Router();

purchaseRouter.use(authValidation);

purchaseRouter.post('/purchase', validateSchema(purchaseSchema), (req, res) => {
	console.log('Oi: ', req.body);
	return res.send(req.body);}
);

export default purchaseRouter;
