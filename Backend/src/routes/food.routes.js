const express = require("express");
const router = express.Router(); // ✅ This is Express Router
const foodController = require("../controllers/food.controller");
const authmiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

router.post(
  "/",
  authmiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

router.get(
  "/",
  authmiddleware.authUserMiddleware,
  foodController.getFoodItems
);

module.exports = router;
