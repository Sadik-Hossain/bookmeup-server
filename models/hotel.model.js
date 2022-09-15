const mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
  HotelName: {
    type: String,
    required: true,
  },
  location: {
    country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
});

const HotelModel = mongoose.model("HotelModel", HotelSchema);
module.exports = HotelModel;
