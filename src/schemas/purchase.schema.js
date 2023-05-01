import joi from 'joi';

const purchaseSchema = joi.object({
	games: joi.array().items(
		joi.object({
			id: joi.string().required(),
			name: joi.string().required(),
			price: joi.number().required(),
		}).required(),
	).required(),
	total: joi.number().required(),
	creditCard: joi.object({
		number:joi.string().regex(/^[0-9]{16}$/).message('O número cartão deve ser composto por 16 números.').required(),
		name: joi.string().required(),
		cvv: joi.string().regex(/^[0-9]{3}$/).message('O código do cartão deve ser 3 números.').required(),
		validate: joi.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/).message('O formato da data deve ser em MM/YY.').required()
	}).required(),
});

export default purchaseSchema;