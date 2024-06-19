const user = require("../model/user");

exports.setWishlist = async (req, res) => {
  try {
    const { emailId } = req.params;
    const item = req.body;

    const data = await user.findOneAndUpdate(
      { emailId }, // Ensure this matches your schema field
      { $push: { wishList: item } },
      { new: true }
    );

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

exports.deleteWishlist = async (req, res) => {
  const { emailId } = req.params;
  let item = req.body;

  try {
    //its just removes only the item from our array
    const data = await user.updateOne(
      { emailId },
      { $pull: { wishList: item } }
    );

    return res.status(200).json({
      success: true,
      data: data,
      message: "Removed item to the wishlist of db",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};
