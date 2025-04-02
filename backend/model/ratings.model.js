const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 1.5,
  },
});


module.exports = mongoose.model("Rating", ratingsSchema);
