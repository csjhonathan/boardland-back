import { Router } from 'express';
import { history } from '../controllers/history.controller.js';

const historyRouter = Router();

historyRouter.get('/history', history);

export default historyRouter;