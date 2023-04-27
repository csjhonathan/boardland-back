import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { loginSchema, userSchema } from '../schemas/auth.schema.js';
import { signIn, signUp } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSchema(userSchema), signUp);
authRouter.post('/login', validateSchema(loginSchema), signIn);
authRouter.post('/logout');

export default authRouter;