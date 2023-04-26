import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
const app = express();

app 
	.use(cors())
	.use(express.json());

app.listen( process.env.PORT , () => {
	console.log( `Server is running on ${chalk.green( `http://localhost:${process.env.PORT}` )}` );
} );