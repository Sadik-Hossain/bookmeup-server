const { Router } = require("express");
const {
  getHotels,
  postHotels,
  putHotels,
  deleteHotels,
} = require("../controllers/hotel.controller.js");
const router = Router();
router.get("/", getHotels);
router.post("/", postHotels);
router.put("/:id", putHotels);
router.delete("/:id", deleteHotels);
module.exports = router;
