const emailValidation = (email) => {
	return String(email)
		.toLowerCase()
		.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

module.exports = { emailValidation };

//Always the regex starts with /^$/
//To consider, () -> for each part of the regex, to validate a point always use -> \.
// the main validation will be between []
