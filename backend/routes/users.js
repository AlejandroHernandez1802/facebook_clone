const express = require("express");
const router = express.Router();

//Validations import
const userValidator = require("../validators/users");

//Controller importation
const {
	createUser,
	emailVerification,
	userLogin,
} = require("../controllers/users");

//Routes creation
router.post("/create_user", userValidator, createUser);
router.post("/activate", emailVerification);
router.post("/login", userLogin);

module.exports = router;
