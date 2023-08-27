const { usersModel } = require("../models");

const emailValidation = (email) => {
	return String(email)
		.toLowerCase()
		.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

//Always the regex starts with /^$/
//To consider, () -> for each part of the regex, to validate a point always use -> \.
// the main validation will be between []}

const uniqueUsername = async (userName) => {
	let check = await usersModel.findOne({ userName });
	if (check) {
		userName += (+new Date() * Math.random()).toString().substring(0, 1);
	}
	return userName;
};

module.exports = { emailValidation, uniqueUsername };
