const mongoose = require("mongoose");

const FoodPartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const FoodPartnerModel = mongoose.model("FoodPartner", FoodPartnerSchema);

module.exports = FoodPartnerModel;
