const foodModel = require('../models/food.model');


async function createFood(req, res) {
    console.log("req.foodPartner:", req.foodPartner);
    console.log(req.body);
    console.log(req.file); // Access the uploaded video file
    res.send("Create food endpoint is working!");
}


module.exports = {
    createFood,
}

