const mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
  HotelName: {
    type: String,
    required: true,
  },

  country: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },

  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const HotelModel = mongoose.model("HotelModel", HotelSchema);
module.exports = HotelModel;
