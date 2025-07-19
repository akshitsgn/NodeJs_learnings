const express = require("express");
const authRoutes = require("./modules/auth/auth.routes");
const productRoutes = require("./modules/products/product.route"); 

const app = express();
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);       
app.use("/api/products", productRoutes); 


module.exports = app;
