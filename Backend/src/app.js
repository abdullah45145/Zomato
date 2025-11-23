const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");
const app = express();

// ✅ Middlewares must come BEFORE routes
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ✅ Then use routes

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

module.exports = app;
