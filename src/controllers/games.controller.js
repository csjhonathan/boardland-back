import { games } from '../database/collections.js';

export async function findAllGames(req, res) {

	try{

		const gamesList = await games.find().toArray();
		res.status(200).send(gamesList);

	}catch(err){
		console.log(err.message);
		res.status( 500 ).send( {message : err.message} );
	}
}

export async function postGame(req, res){

	const {game} = res.locals;

	try{

		await games.insertOne(game);
		res.sendStatus(201);

	}catch(err){
		console.log(err.message);
		res.status( 500 ).send( {message : err.message} );
	}
}
