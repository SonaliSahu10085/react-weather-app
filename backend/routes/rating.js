const express = require("express");
const Rating = require("../model/ratings.model");
const router = express.Router();

// GET - To Get ALL Ratings
router.get("/", async (req, res, next) => {
  try {
    const data = await Rating.find();
    res.json({ success: true, message: "All Ratings", data });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in the server." });
  }
});

// POST - To Create new rating
router.post("/", async (req, res, next) => {
  try {
    const { name, message, rating } = req.body;
    if (!name || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "Please, Provide all details",
      });
    }

    if (!(rating >= 1 && rating <= 5)) {
      return res
        .status(400)
        .json({
          sucess: false,
          message: "Rating should be in the range of 1 to 5",
        });
    }
    const data = new Rating({ name, message, rating });
    await data.save();
    res.status(201).json({ success: true, message: "Rating Created", data });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in the server." });
  }
});

module.exports = router;
