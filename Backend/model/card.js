const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
    courseName: {
      type: String,
      requires: true,
      maxLength: 240,
    },
    courseAuthor: {
      type: String,
      required: true,
      maxLength: 100,
    },

    ratingNumber: {
      type: String,
      required: true,
      maxLength: 100,
    },

    numOfRatings: {
      type: String,
      required: true,
    },
    discountPrice: {
      type: String,
      required: true,
    },
    originalPrice: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Card", cardSchema);
