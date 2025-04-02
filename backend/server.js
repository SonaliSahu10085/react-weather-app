require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const ratingRouter = require("./routes/rating");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Root Route is Working",
  });
});

//rating route
app.use("/api/ratings", ratingRouter);

app.all("*", (req, res) => {
  res.status(500).json({ success: false, message: "Endpoint not exists" });
});

app.listen(4500, () => {
  console.log(`Server is listen on port : 4500`);
});
