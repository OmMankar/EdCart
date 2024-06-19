const user = require("../model/user");

exports.setMyLearning = async (req, res) => {
  const { emailId } = req.params;
  const item = req.body;
  // console.log(item);
  const data = await user.updateOne(
    { emailId }, // Ensure this matches your schema field

    { $push: { myLearningList: { $each: item } } },
    { new: true }
  );
  // console.log(data);
  try {
    return res.status(200).json({
      success: true,
      data: data,
      message: "Adding item to the wishlist of db",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deleteMyLearning = async (req, res) => {
  const { emailId } = req.params;
  let item = req.body;

  try {
    console.log(item);
    const data = await user.updateOne(
      { emailId },
      { $pull: { myLearningList: item } },
      { new: true }
    );
    console.log(data);
    return res.status(200).json({
      success: true,
      data: data,
      message: "Removed item to the myLearningList of db",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};
