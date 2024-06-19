//import the model
const Card = require("../model/card");

// Define the route handler

exports.getCards = async (req, res) => {
  try {
    //fetch all the cards
    const Cards = await Card.find({});

    //sending response
    res.status(200).json({
      success: true,
      data: Cards,
      message: "All the cards are fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};
