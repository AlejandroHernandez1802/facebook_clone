const bcrypt = require("bcrypt");

const encrypt = async (plainText) => {
	return await bcrypt.hash(plainText, 10);
};

const compareEncryption = async (plainText, encryption) => {
	return await bcrypt.compare(plainText, encryption);
};

module.exports = { encrypt, compareEncryption };
