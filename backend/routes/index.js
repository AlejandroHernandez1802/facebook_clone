const express = require("express");
const router = express.Router();
const fs = require("fs");
const currentDirectory = __dirname;

const removeFileExtension = (file) => {
	return file.split(".")[0];
};

const finalRoutes = fs.readdirSync(currentDirectory).filter((file) => {
	const fileName = removeFileExtension(file);
	if (fileName !== "index") router.use(`/${fileName}`, require(`./${file}`));
});

module.exports = router;
