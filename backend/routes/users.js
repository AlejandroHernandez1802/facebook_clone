const express = require("express");
const router = express.Router();

//Controller importation
const { createUser } = require("../controllers/users");

//Routes creation
router.post("/create_user", createUser);

module.exports = router;
