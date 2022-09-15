const HotelModel = require("../models/hotel.model");

const getHotels = async (req, res) => {
  try {
    const result = await HotelModel.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const postHotels = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  const Hotel = new HotelModel(body);
  try {
    const result = await Hotel.save();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
const putHotels = async (req, res) => {
  res.send("hello from put controller");
};
const deleteHotels = async (req, res) => {
  res.send("hello from delete controller");
};
module.exports = { getHotels, postHotels, putHotels, deleteHotels };
