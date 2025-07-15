const express = require("express");
const authRoutes = require("./modules/auth/auth.routes");
const productRoutes = require("./modules/products/product.route"); // ✅ import product routes

const app = express();
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);       // auth remains same
app.use("/api/products", productRoutes); // add product routes

// Optional: home route
app.get("/", (req, res) => {
  res.send("🚀 API is working");
});

module.exports = app;
