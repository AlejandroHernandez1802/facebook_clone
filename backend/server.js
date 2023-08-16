const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const serverPort = process.env.PORT || 3001;

//Backend main config
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//Routes initialization
// readdirSync("./routes").map((file) => app.use("/", require(`./routes/${file}`)))
app.use("/api", require("./routes"));

//Database connection
const dbConnection = require("./config/mongo");

//Server start
app.listen(serverPort, () => {
	console.log("Server successfully started");
});
