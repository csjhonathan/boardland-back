
import { session } from '../database/collections.js';

export async function authValidation(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization?.replace('Bearer ', '');
	if (!token) return res.sendStatus(401);

	try {
		const currentSession = await session.findOne({ token });
		if (!currentSession) return res.sendStatus(401);

		res.locals.session = currentSession;

		next();
	} catch (err) {
		res.status(500).send(err.message);
	}
}