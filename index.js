// index.js
require("dotenv").config();
const connectDB = require("./database/dbConnection");
const app = require("./src/src");

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
});
