import Joi from 'joi';

const gameSchema = Joi.object({
	name : Joi
		.string()
		.required(), 
	image : Joi
		.string()
		.uri()
		.required(), 
	min : Joi
		.number()
		.required()
	,
	max : Joi
		.number()
		.required()
	, 
	price : Joi
		.number()
		.required()
	, 
	description : Joi
		.string()
		.required()
});

export default gameSchema;