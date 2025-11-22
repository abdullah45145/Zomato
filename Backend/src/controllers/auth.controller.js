const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { fullname, email, password } = req.body;

    // 🔒 Hash password before saving
    const isuserAlreadyExist = await UserModel.findOne({ email });
    if (isuserAlreadyExist) {
      return res.status(400).json({
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, "dc3237642c4389498a016");
    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  // Implementation for user login
}

module.exports = {
  registerUser,
  loginUser,
};
