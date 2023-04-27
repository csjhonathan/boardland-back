import { users } from '../database/collections.js';
import bcrypt from 'bcrypt';

export async function signUp (req, res) {
	const {name, email, address, image, password} = req.body;
	
	try {
		
		console.log(await users.find().toArray());

		const user = await users.findOne({ email });
		if (user) return res.status(409).send('E-mail já cadastrado!');
		
		const hash = bcrypt.hashSync(password, 10);
		await users.insertOne({name, email, address, image, password: hash});

		res.sendStatus(201);

	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function signIn (req, res) {
	// const {email, password} = req.body;
	
}