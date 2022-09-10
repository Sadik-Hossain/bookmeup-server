const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("I am bookmeup server");
});

//* ------------- mongoDb connect -------------------
const connect = async () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected to db");
  } catch (error) {
    throw error;
  }
};
//* ----------- reconnection purpose ----------------------
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

app.listen(PORT, () => {
  connect();
  console.log(`server running on ${PORT}`);
});
