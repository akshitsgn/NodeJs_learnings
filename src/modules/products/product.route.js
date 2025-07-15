const express = require('express');
const router = express.Router();
const { addProduct } = require('./product.controller');
const verifyToken = require('../../middlewares/verifytoken');
const authMiddleware = require('../../middlewares/authmiddleware');

router.post('/add', authMiddleware, addProduct);

module.exports = router;
