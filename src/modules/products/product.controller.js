const Product = require("../../../database/models/product.model");


const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({
      name,
      price,
      user: req.user.id  // ✅ assign from token
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added", product: newProduct });
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error });
  }
};

module.exports = { addProduct };
