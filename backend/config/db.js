const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Database connection failed", e);
  }
};

module.exports = connectDB;
