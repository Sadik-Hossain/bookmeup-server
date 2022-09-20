const { Router } = require("express");
const { getRooms, addRoom } = require("../controllers/room.controller");

const router = Router();
router.route("/").get(getRooms).post(addRoom);
module.exports = router;
