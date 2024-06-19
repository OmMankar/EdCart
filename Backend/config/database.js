const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection to db successful."))
    .catch((error) => {
      console.log("Error has ocuured");
      console.log(error.message);
      process.exit(1);
    });
};
module.exports = dbConnect;
