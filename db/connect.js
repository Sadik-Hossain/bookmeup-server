const colors = require("colors");
const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sadik:sadik123@cluster0.ljrbn8h.mongodb.net/bookmeup?retryWrites=true&w=majority"
    );
    console.log("connected to db".yellow.bold);
  } catch (error) {
    throw error;
  }
};
module.exports = connect;
