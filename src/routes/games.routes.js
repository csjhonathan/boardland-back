import { Router } from 'express';
import { findAllGames, postGame, getGameById } from '../controllers/games.controller.js';
import { gameValidation } from '../middlewares/game.schema.validations.js';
import gameSchema from '../schemas/game.schema.js';
const gamesRouter = Router();

gamesRouter.get('/games', findAllGames);
gamesRouter.post('/games', gameValidation(gameSchema), postGame);
gamesRouter.get('/games/:ID', getGameById);

export default gamesRouter;