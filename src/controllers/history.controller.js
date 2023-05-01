import { purchases, users } from '../database/collections.js';

export async function history(req, res){

	const { idUser } = res.locals.session;
	const {authorization} = req.headers;
	const token = authorization?.replace('Bearer ', '');

	if (!token) return res.sendStatus(401);

	try {
		const user = await users.findOne({_id: idUser});
		if (!user) return res.status(404).send('Usuário não encontrado');

		const historyOrder = await purchases.find({idUser}).sort({_id: -1}).toArray();
		const HistoryWithoutCard = historyOrder.map( h => {
			delete h.creditCard.cvv;
			delete h.creditCard.validate;
			if (h.creditCard.number.length === 16) {
				const newCard = h.creditCard.number.slice(-4);
				return {...h, creditCard: {...h.creditCard, number: newCard}};
			}
			return h;
		});

		res.send(HistoryWithoutCard);

	} catch (err) {
		return res.status(500).send(err.message);
	}
    
}