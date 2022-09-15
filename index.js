const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./db/connect");
const { CreateError } = require("./utils/error");
require("dotenv").config();
const hotelRoutes = require("./routes/hotel.routes");
const app = express();

//* middlewares
app.use(cors());
app.use(express.json());

//* routes
app.use("/api/hotel", hotelRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send("I am bookmeup server");
});

app.get("/help", (req, res) => {
  res.json({ message: "hello from express" });
});

// * global error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    // stack: err.stack,
  });
});
//* ------------- mongoDb connect -------------------
// const connect = async () => {
//   try {
//     mongoose.connect(process.env.DB);
//     console.log("connected to db");
//   } catch (error) {
//     throw error;
//   }
// };
//* ----------- reconnection purpose ----------------------
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongodb connected".bgBlue);
});

connect();
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
