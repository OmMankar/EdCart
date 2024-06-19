const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    wishList: {
      type: Array,
      default: [],
    },
    cartList: {
      type: Array,
      default: [],
    },
    myLearningList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("user", userSchema);
