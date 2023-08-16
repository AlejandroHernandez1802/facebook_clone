//Models import
const { usersModel } = require("../models/");

//Helpers import
const { emailValidation } = require("../helpers/validation");

//Utils import
const { handleHttpError } = require("../utils/handleError");

const createUser = async (req, res) => {
	try {
		const data = req.body;
		//Validations (NOT MY PREFERRED)
		if (!emailValidation(data.email)) {
			handleHttpError(res, "INVALID_EMAIL", 400);
		}
		const emailExists = usersModel.find({ email: data.email });
		if (emailExists) {
			handleHttpError(res, "EMAIL_EXISTS", 400);
		}
		//User creation
		const newUser = await new usersModel(data).save(); //await usersModel.create(data);
		res.send(newUser);
	} catch (err) {
		handleHttpError(res, "ERROR_CREATE_USER");
	}
};

module.exports = { createUser };
