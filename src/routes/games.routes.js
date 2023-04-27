import { Router } from 'express';
import { findAllGames, postGame } from '../controllers/games.controller.js';
import { gameValidation } from '../middlewares/game.schema.validations.js';
import gameSchema from '../schemas/game.schema.js';
const gamesRouter = Router();

gamesRouter.get('/games', findAllGames);
gamesRouter.post('/games', gameValidation(gameSchema), postGame);

export default gamesRouter;