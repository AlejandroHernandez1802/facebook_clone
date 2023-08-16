const mongoose = require("mongoose");

const dbConnection = mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Database successfully conected");
	})
	.catch((err) => {
		console.log(
			`There was an error while trying to connect to the database: ${err}`
		);
	});

module.exports = dbConnection;
