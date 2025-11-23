const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.foodPartnerId);
    if (!foodPartner) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    req.foodPartner = foodPartner;
    next();
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized  : No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decoded.foodPartnerId);
        if (!foodPartner) {
            return res.status(401).json({ message: "Unauthorized : Invalid token" });
        }
        req.foodPartner = foodPartner;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}




module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware
};
