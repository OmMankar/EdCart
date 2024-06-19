const user = require("../model/user");

exports.setCartlist = async (req, res) => {
  const { emailId } = req.params;
  const item = req.body;

  const data = await user.findOneAndUpdate(
    { emailId }, // Ensure this matches your schema field
    { $push: { cartList: item } },
    { new: true }
  );
  try {
    return res.status(200).json({
      success: true,
      data: data,
      message: "Adding item to the cartList of db",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deleteCartlist = async (req, res) => {
  const { emailId } = req.params;
  let item = req.body;

  try {
    const data = await user.updateOne(
      { emailId },
      { $pull: { cartList: item } }
    );

    return res.status(200).json({
      success: true,
      data: data,
      message: "Removed item to the cartlist of db",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deleteAllCartlist = async (req, res) => {
  const { emailId } = req.params;
  // console.log(emailId);
  try {
    const data = await user.updateOne(
      { emailId },
      { $unset: { cartList: [] } }
    );
    return res.status(200).json({
      succeess: true,
      data,
      message: "All the cards removed from my learning.",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      success: false,
      message: "Internal server error",
    });
  }
};
