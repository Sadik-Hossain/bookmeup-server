const { Router } = require("express");
const {
  getHotels,
  postHotels,
  putHotels,
  deleteHotels,
  getHotelById,
} = require("../controllers/hotel.controller.js");
const router = Router();
router.get("/", getHotels);
router.get("/:id", getHotelById);

router.post("/", postHotels);
router.put("/:id", putHotels);
router.delete("/:id", deleteHotels);
module.exports = router;
