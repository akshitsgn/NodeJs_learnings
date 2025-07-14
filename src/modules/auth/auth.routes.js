// src/modules/auth/auth.routes.js
const express = require("express");
const { registerUser, loginUser } = require("./auth.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
