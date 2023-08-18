const { matchedData } = require("express-validator");

//Models import
const { usersModel } = require("../models/");

//Helpers import
const { emailValidation } = require("../helpers/validation");

//Utils import
const { handleHttpError } = require("../utils/handleError");
const { encrypt } = require("../utils/handlEncryption");

const createUser = async (req, res) => {
	try {
		req = req.body;
		const password = await encrypt(req.password);
		const body = { ...req, password, userName: req.firstName + req.lastName };

		//Validations (NOT MY PREFERRED)
		if (!emailValidation(body.email)) {
			handleHttpError(res, "INVALID_EMAIL", 400);
			return;
		}

		const emailExists = await usersModel.findOne({ email: body.email });
		if (emailExists) {
			handleHttpError(res, "EMAIL_EXISTS", 400);
			return;
		}

		//User creation
		const newUser = await new usersModel(body).save(); //await usersModel.create(data);
		res.send(newUser);
	} catch (err) {
		console.log(err);
		handleHttpError(res, "ERROR_CREATE_USER");
	}
};

module.exports = { createUser };
