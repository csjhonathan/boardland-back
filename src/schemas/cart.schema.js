import joi from 'joi';

const cartSchema = joi.object({
	cart: joi.array().items(
		joi.object({
			id: joi.string().required(),
			name: joi.string().required(),
			image: joi.string().uri().required(),
			price: joi.number().required(),
		}).required(),
	).required(),
	total: joi.number().required(),
});

export default cartSchema;