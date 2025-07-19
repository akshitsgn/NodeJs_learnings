const express = require('express');
const router = express.Router();
const { addProduct,updateProduct,deleteProduct,getMyProducts} = require('./product.controller');
const authMiddleware = require('../../middlewares/authmiddleware');

router.post('/add', authMiddleware, addProduct);
router.patch('/update/:id', authMiddleware, updateProduct);
router.delete('/delete/:id', authMiddleware, deleteProduct);
router.get('/my-products', authMiddleware, getMyProducts);

module.exports = router;
