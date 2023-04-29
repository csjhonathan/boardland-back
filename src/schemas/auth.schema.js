import Joi from 'joi';

export const userSchema = Joi.object({
	name: Joi.string().min(6).pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+){1,}$/).message('Informe o nome e sobrenome.').required(),
	email: Joi.string().min(5).email().message('O campo deve ser em E-mail válido.').required(),
	address: Joi.string().min(10).message('Informe seu endereço completo.').required(),
	image: Joi.string().uri({ scheme: ['http', 'https'] }).min(5).message('O campo deve ser uma URL válida.').required(),
	password: Joi
		.string()
		.min(8)
		.max(30)
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/)
		.messages({'string.pattern.base': 'A senha deve ter 8 ou mais caracteres e conter letras, números e caracteres especiais.'})
		.required()
});

export const loginSchema = Joi.object({
	email: Joi.string().min(5).email().message('O campo deve ser em E-mail válido.').required(),
	password: Joi
		.string()
		.min(8)
		.max(30)
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/)
		.messages({'string.pattern.base': 'A senha deve ter 8 ou mais caracteres e conter letras, números e caracteres especiais.'})
		.required(),
	check: Joi.boolean().truthy('true').default(false)
});