env = process.env.NODE_ENV || "DEV"; //change as per environment, ref config.js
var config = require("./config")[env];
const log = require("./logger/logger");

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//for restapi using express
const app = express();
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
//rest endpoints
const searchHotelRoom = require("./routes/searchHotelRoom.route");
app.use("/api/searchHotelRoom", searchHotelRoom);

const bookHotelRoom = require("./routes/bookHotelRoom.route");
app.use("/api/bookHotelRoom", bookHotelRoom);

//creating Mongo DB connection
mongoose.Promise = global.Promise;
mongoose.connect(
	`mongodb://${config.database.host}:${config.database.port}/${config.database.dbname}`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
//server setup
app.listen(config.port, () =>
	log.info(`hotelBooking App listening on port ${config.port}!`)
);
module.exports = app;