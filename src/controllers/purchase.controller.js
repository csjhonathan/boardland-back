import { purchases, users, games } from '../database/collections.js';
import { ObjectId } from 'bson';
import dayjs from 'dayjs';
import { emailTemplate, sendEmail} from '../helpers/emailSender.js';
export async function newPurchase(req, res){
	const { idUser } = res.locals.session;
	const { games: selectedGames, total, creditCard } = req.body;

	try {
		const user = await users.findOne({ _id: idUser });
		if (!user) return res.status(404).send('Usuário não encontrado');

		selectedGames.map(async game => {
			const foundGame = games.findOne({_id : new ObjectId(game.id)});
			if (!foundGame) return res.status(404).send(`O jogo ${game.name} não foi encontrado`);
		});

		await purchases.insertOne({ idUser, games: selectedGames, total, creditCard, date: dayjs(Date.now()).format('DD/MM') });
		const text = await emailTemplate(idUser);
		sendEmail(text, user.email);
		return res.sendStatus(201);
	} catch (error){
		return res.status(500).send(error.message);
	}
}