export function gameValidation(schema){
	return (req, res, next) => {
		const {error, value} = schema.validate(req.body, {abortEarly : false});

		if(error){
			return res.status( 422 ).send( {message : error.details.map( er => er.message )} );
		}

		res.locals.game = value;
		next();
	};
}