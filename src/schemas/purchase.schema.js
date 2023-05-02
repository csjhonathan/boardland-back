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
		name: joi.string().min(6).pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+){1,}$/).message('Informe o nome e sobrenome.').required(),
		cvv: joi.string().regex(/^[0-9]{3}$/).message('O código do cartão deve ter 3 dígitos numéricos.').required(),
		validate: joi.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/).message('O formato da data deve ser em MM/AA (mês e ano).').required()
	}).required(),
});

export default purchaseSchema;