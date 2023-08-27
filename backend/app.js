const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ordersRouter = require("./routes/orders");
const bot = require("./bot");
require("dotenv").config();

const app = express();

const dbURL = process.env.MODE === "dev" ? "127.0.0.1" : "mongodb";

mongoose
	.connect(`mongodb://${dbURL}:27017/record`)
	.then(() => {
		console.log("DB Connected");
	})
	.catch((err) => {
		console.log("DB Connection ERROR:");
		console.log(err);
	});

app.use(cors());
app.use(bodyParser.json());
app.use("/", ordersRouter);

app.listen(5000, () => {
	console.log("Server started:");
});
