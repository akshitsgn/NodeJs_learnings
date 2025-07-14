// src/modules/auth/auth.controller.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../../database/models/user.model");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ msg: "User registered", user: newUser });
  } catch (err) {
    res.status(500).json({ msg: "Error", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Incorrect password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ msg: "Login successful", token });
  } catch (err) {
    res.status(500).json({ msg: "Error", error: err.message });
  }
};

module.exports = { registerUser, loginUser };
