const user = require("../model/user");
const bcrypt = require("bcryptjs");

exports.LogIn = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    //wheter all the details are filled or not
    if (!emailId || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details",
      });
    }
    //checking wheter user with the email is already registered or not
    if (!(await user.findOne({ emailId }))) {
      return res.status(400).json({
        success: false,
        message: "User with given Email Id not found",
      });
    }
    const userData = await user.findOne({ emailId });

    await bcrypt.compare(password, userData.password, (err, data) => {
      //if error than throw error
      if (err) throw err;

      //if both match than you can do anything
      if (data) {
        userData.password = null;
        return res.status(200).json({
          success: true,
          data: userData,
          message: "Successfully Logged In",
        });
      } else {
        return res.status(401).json({ message: "Invalid Password" });
      }
    });
    //erasing the password from the object which is sent to the client
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
      message: "Server Error",
    });
  }
};
