const card = require("../model/card");

// define route handler
exports.createCard = async (req, res) => {
  try {
    //extract detail from req body
    const {
      category,
      image,
      courseName,
      courseAuthor,
      ratingNumber,
      numOfRatings,
      discountPrice,
      originalPrice,
    } = req.body;
    const newCard = await card.create({
      category,
      image,
      courseName,
      courseAuthor,
      ratingNumber,
      numOfRatings,
      discountPrice,
      originalPrice,
    });
    //sending response
    res.status(200).json({
      success: true,
      data: req.body,
      message: "Create the card successfully ",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error ",
    });
  }
};
