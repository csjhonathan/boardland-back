import { games } from '../database/collections.js';
import { ObjectId } from 'bson';
export async function findAllGames(req, res) {

	try{

		const gamesList = await games.find().toArray();
		res.status(200).send(gamesList);

	}catch(err){
		res.status( 500 ).send( {message : err.message} );
	}
}

export async function postGame(req, res){

	const {game} = res.locals;

	try{

		await games.insertOne(game);
		res.sendStatus(201);

	}catch(err){
		res.status( 500 ).send( {message : err.message} );
	}
}

export async function getGameById(req, res){

	const {ID} = req.params;
	if(!ID)return res.status(404).send({message : 'Jogo não encontrado'});
	try{
		const game = await games.findOne({_id : new ObjectId(ID)});
		if(!game) return res.status(404).send({message : 'Jogo não encontrado'});
		res.status(200).send(game);
	}catch(err){
		res.status(500).send({message : err.message});
	}
	
}
