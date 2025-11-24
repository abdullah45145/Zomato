const mongoose = require("mongoose");
const Foodschema = new mongoose.Schema ({
    name: {type: String, required: true},
    video: {type: String, required: true},
    description: {type: String, required: true},
    foodpartner: {type: mongoose.Schema.Types.ObjectId, ref: "FoodPartner", required: true}
});

const FoodModel = mongoose.model("Food", Foodschema);

module.exports = FoodModel;