const user = require("../model/user");
const bcrypt = require("bcryptjs");
//define the route handler

exports.signup = async (req, res) => {
  try {
    const { name, emailId, password } = req.body;
    //when req data missing
    if (!name || !emailId || !password) {
      return res.status(400).json({
        success: false,
        message: "All the Details are not filled.",
      });
    }
    //checking wheter already registered
    if (await user.findOne({ emailId })) {
      return res.status(400).json({
        success: false,
        message: "User with this Email Id already exist.",
      });
    }
    ///
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = await user.create({ name, emailId, password: hashedPassword });
    User.password = "";
    return res.status(200).json({
      success: true,
      data: User,
      message: "Create Your account successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: true,
      message: "Please Try again later.",
    });
  }
};
