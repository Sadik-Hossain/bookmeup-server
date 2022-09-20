const { count } = require("../models/hotel.model");
const HotelModel = require("../models/hotel.model");
const RoomModel = require("../models/room.model");

// const find = async (req, res) => {
//   console.log(req.query);
//   const { min, max, ...other } = req.query;

//   const result = await HotelModel.find({
//     ...other,
//     cheapestPrice: { $gt: min || 1, $lt: max || 999 },
//   });
//   console.log(result);
//   res.send(result);
// };

const getHotels = async (req, res) => {
  console.log(req.query);
  const { min, max, ...others } = req.query;

  try {
    const result = await HotelModel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    });
    console.log(`${result}`.bgRed);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const getHotelById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await HotelModel.findById({ _id: id });
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

module.exports = {
  getHotels,
  postHotels,
  putHotels,
  deleteHotels,
  getHotelById,
};
