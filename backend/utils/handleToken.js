const jwt = require("jsonwebtoken");

const signToken = (payload, tokenDuration = "1h") => {
	return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
		expiresIn: tokenDuration,
	});
};

const compareToken = (plainText, token) => {};

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = { signToken, compareToken, verifyToken };
