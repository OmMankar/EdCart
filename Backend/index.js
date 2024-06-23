const express = require("express");
const app = express();
const cors = require("cors");

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

//unable cors for all routers
app.use(cors());

//import routes for TODO API
const Routes = require("../Backend/route/websiteRoute");

//mount the todo api routes
app.use("/api/v1", Routes);

//start the server
app.listen(PORT, () => {
  console.log(`Server Started at Port No. ${PORT}`);
});

//connect to the database
const dbConnect = require("../Backend/config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is the homepage .</h1>`);
});
