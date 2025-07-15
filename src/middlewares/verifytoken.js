// const jwt = require("jsonwebtoken");
// const JWT_SECRET = process.env.JWT_SECRET || "mysecret";

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;  // 👈 This line MUST be present
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// module.exports = verifyToken;
