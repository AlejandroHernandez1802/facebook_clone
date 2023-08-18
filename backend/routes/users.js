const express = require("express");
const router = express.Router();

//Validations import
const userValidator = require("../validators/users");

//Controller importation
const { createUser } = require("../controllers/users");

//Routes creation
router.post("/create_user", userValidator, createUser);

module.exports = router;
