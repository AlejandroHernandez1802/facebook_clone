const { check, validationResult } = require("express-validator");

const userValidator = [
	check("firstName").exists().notEmpty().isLength({ min: 2, max: 30 }),
	check("lastName").exists().notEmpty().isLength({ min: 2, max: 30 }),
	check("password").exists().notEmpty().isLength({ min: 5, max: 30 }),
	(req, res, next) => {
		try {
			validationResult(req).throw();
			return next();
		} catch (err) {
			res.send({ error: err.array() });
		}
	},
];

module.exports = userValidator;
