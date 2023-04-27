import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import route from './routes/index.routes.js';

dotenv.config();
const app = express();

app 
	.use(cors())
	.use(express.json())
	.use(route);

app.listen( process.env.PORT , () => {
	console.log( `Server is running on ${chalk.green( `http://localhost:${process.env.PORT}` )}` );
} );