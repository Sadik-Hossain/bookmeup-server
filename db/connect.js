const colors = require("colors");
const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("connected to db".yellow.bold);
  } catch (error) {
    throw error;
  }
};
module.exports = connect;
