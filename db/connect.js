const colors = require("colors");
const { default: mongoose } = require("mongoose");
// mongodb+srv://sadik:VFYAjL1PjzqzAQLH@cluster0.97alsyr.mongodb.net/bookmeup
exports.connect = async () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected to db".yellow.bold);
  } catch (error) {
    throw error;
  }
};
