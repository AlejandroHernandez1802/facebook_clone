const { matchedData } = require("express-validator");

//Models import
const { usersModel } = require("../models/");

//Helpers import
const { emailValidation, uniqueUsername } = require("../helpers/validation");

//Utils import
const { handleHttpError } = require("../utils/handleError");
const { encrypt, compareEncryption } = require("../utils/handlEncryption");
const { signToken, verifyToken } = require("../utils/handleToken");
const { sendVerificationEmail } = require("../utils/handleEmails");

const createUser = async (req, res) => {
	try {
		req = req.body;
		const password = await encrypt(req.password);
		const tempUsername = req.firstName + req.lastName;
		const userName = await uniqueUsername(tempUsername);
		const body = { ...req, password, userName };

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

		//Verification token
		const verificationToken = signToken({ id: newUser._id }, "2h");

		//Verfication mail send
		const mailUrl = `${process.env.BASE_URL}/activate/${verificationToken}`;
		sendVerificationEmail(newUser.email, newUser.firstName, mailUrl);

		//Login token
		const token = signToken({ id: newUser._id }, "7d");

		//Sending response to the server
		res.send({
			id: newUser._id,
			username: newUser.userName,
			picture: newUser.picture,
			firstname: newUser.firstName,
			lastname: newUser.lastName,
			token,
			verified: newUser.verified,
			message:
				"User successfully created. Please check your email to activate your account.",
		});
	} catch (err) {
		handleHttpError(res, "ERROR_CREATE_USER");
	}
};

const emailVerification = async (req, res) => {
	try {
		const { token } = req.body;
		const user = verifyToken(token);
		const check = await usersModel.findById(user.id);
		if (check.verified === true) {
			handleHttpError(res, "This email is already activated", 400);
			return;
		}
		await usersModel.findByIdAndUpdate(user.id, { verified: true });
		res.status(200);
		res.send({ message: "User correctly activated." });
	} catch (err) {
		handleHttpError(res, "NO_VERIFICATION_TOKEN", 400);
	}
};

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await usersModel.findOne({ email });
		if (!user) {
			handleHttpError(res, "USER_NOT_FOUND", 404);
		}
		const validUser = await compareEncryption(password, user.password);
		if (!validUser) {
			handleHttpError(res, "INVALID_CREDENTIALS", 403);
		}
		const token = signToken({ id: user._id }, "7d");
		//Sending response to the server
		res.send({
			id: user._id,
			username: user.userName,
			picture: user.picture,
			firstname: user.firstName,
			lastname: user.lastName,
			token,
			verified: user.verified,
			message:
				"User successfully created. Please check your email to activate your account.",
		});
	} catch (err) {
		handleHttpError(res, "Invalid cretentials", 400);
	}
};

module.exports = { createUser, emailVerification, userLogin };
