import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import route from './routes/index.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json' assert {type:"json"};

dotenv.config();
const app = express();

app 
	.use(cors())
	.use(express.json())
	.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
	.use(route);

const port = process.env.PORT || 5000;

app.listen( port , () => {
	console.log( `Server is running on ${chalk.green( `http://localhost:${port}` )}` );
} );