/* eslint-disable no-loss-of-precision */
import joi from 'joi';

const purchaseSchema = joi.object({
	games: joi.array().items(joi.string()).required(),
	total: joi.number().required(),
	creditCard: joi.object({
		number:joi.string().regex(/^[0-9]{16}$/).required(),
		name: joi.string().required(),
		cvv: joi.string().regex(/^[0-9]{3}$/).required(),
		validate: joi.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/).required()
	}).required(),
});

export default purchaseSchema;