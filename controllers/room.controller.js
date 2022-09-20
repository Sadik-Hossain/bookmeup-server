const HotelModel = require("../models/hotel.model");
const RoomModel = require("../models/room.model");
exports.getRooms = async (req, res) => {
  console.log(req.body.rooms);

  const Ids = req.body.rooms;
  //   const results = await Model.find({ _id: Ids });
  res.send("hello from getrooms");
};
exports.addRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new RoomModel(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};
