const UserModel = require("../models/user.model");
const FoodPartnerModel = require("../models/foodpartner.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { fullname, email, password } = req.body;

    // 🔒 Hash password before saving
    const isuserAlreadyExist = await UserModel.findOne({ email });
    if (isuserAlreadyExist) {
      return res.status(400).json({
        message: "User already exists with this email baby",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
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
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    },
  });
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully",
    });
  } 


 async function registerFoodPartner(req, res) {
    // Implementation for food partner registration
    const { name, email, password } = req.body;
    const isPartnerAlreadyExist = await FoodPartnerModel.findOne({ email });
    if (isPartnerAlreadyExist) {
      return res.status(400).json({
        message: "Food Partner already exists with this email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const foodPartner = await FoodPartnerModel.create({
      name, 
        email,
        password: hashedPassword,
    });
    const token = jwt.sign({ foodPartnerId: foodPartner._id }, process.env.JWT_SECRET);
    res.cookie("token", token);     

    res.status(201).json({
      message: "Food Partner registered successfully",
      foodPartner: {
        id: foodPartner._id,
        name: foodPartner.name,
        email: foodPartner.email,
      },
    });

  } 

  async function loginFoodPartner(req, res) {
    // Implementation for food partner login
    const { email, password } = req.body;
    const foodPartner = await FoodPartnerModel.findOne({ email });
    if (!foodPartner) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
    if (!isPasswordValid) {
        return res.status(400).json({
        message: "Invalid email or password",
        });
    }
    const token = jwt.sign({ foodPartnerId: foodPartner._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
        id: foodPartner._id,
        name: foodPartner.name,
        email: foodPartner.email,
            
        },
    });
  }
async function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
      message: "Food Partner logged out successfully",
    });
  }


module.exports = {
  registerUser,
  loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
};
