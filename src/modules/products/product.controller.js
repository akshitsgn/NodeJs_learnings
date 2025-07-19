const Product = require("../../../database/models/product.model");


const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({
      name,
      price,
      user: req.user.id  
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added", product: newProduct });
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error });
  }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(401).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.user.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.user.toString() !== userId) {
            return res.status(403).json({ message: 'Forbidden: You cannot delete this product' });
        }

        await Product.findByIdAndDelete(productId);

        res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

const getMyProducts = async (req, res) => {
    try {
        const userId = req.user.id;
        const products = await Product.find({ user: userId });

        res.status(200).json({ success: true, products: products });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getMyProducts,
};

