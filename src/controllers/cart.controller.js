import { carts, users } from '../database/collections.js';
import { ObjectId } from 'mongodb';
export async function updateCart(req, res){
	const { idUser } = res.locals.session;
	const { cart, total } = req.body;

	try {
		const user = await users.findOne({ _id: idUser });
		if (!user) return res.status(404).send('Usuário não encontrado');

		const currentCart = await carts.findOne({ idUser });

		if (!currentCart) {
			await carts.insertOne({idUser, cart, total});
			return res.sendStatus(201);
		} 

		await carts.updateOne({ idUser }, { $set: { cart, total } });
		return res.sendStatus(200);
	} catch (error){
		return res.status(500).send(error.message);
	}
}

export async function getUserCart(req, res) {
	const { idUser } = res.locals.session;

	try {
		const cart = await carts.findOne({ idUser });

		if (!cart) {
			const newCart = { cart: [], total: 0};
			return res.status(200).send(newCart);
		}

		return res.status(200).send(cart);
	} catch (error){
		return res.status(500).send(error.message);
	}
}


export async function syncrhonyzeCart(req, res){
	const {cartId, synchronyzedCart, total} = req.body;
	try{
		await carts.updateOne({_id : new ObjectId(cartId)}, {$set : {cart : synchronyzedCart, total}});
		const cart = await carts.findOne({_id : new ObjectId(cartId)});
		return res.status(200).send(cart);
	}catch(err){
		return res.status(500).send({message : err.message});
	}	
}