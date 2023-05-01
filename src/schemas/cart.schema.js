import joi from 'joi';

const cartSchema = joi.object({
	cart: joi.array().items(
		joi.object({
			id: joi.string(),
			name: joi.string(),
			image: joi.string().uri(),
			price: joi.number(),
		})
	).required(),
	total: joi.number().required(),
});

export default cartSchema;