const foodModel = require("../models/food.model");
const storageservice = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  try {
    console.log("req.foodPartner:", req.foodPartner);
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No video uploaded" });
    }

    // 1️⃣ Upload video to ImageKit
    const fileuploadedresult = await storageservice.uploadfile(
      req.file.buffer,
      uuid()
    );

    console.log("Uploaded video:", fileuploadedresult);

    // 2️⃣ Create food item in database
    const fooditem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileuploadedresult.url, // matches schema
      foodpartner: req.foodPartner._id, // matches schema
    });

    return res.status(201).json({
      message: "Food item created successfully",
      fooditem,
    });
  } catch (err) {
    console.error("Error creating food:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}

async function getFoodItems(req, res) {
  const fooditems = await foodModel.find({})
  res.status(200).json({
    message: "Food items fetched successfully on user side",
    fooditems,
    }

  )
}



module.exports = {
  createFood,   
    getFoodItems
};
