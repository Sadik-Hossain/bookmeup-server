const colors = require("colors");
// * custom error for clientside
exports.CreateError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  console.log(err.stack.bgMagenta);
  return err;
};
