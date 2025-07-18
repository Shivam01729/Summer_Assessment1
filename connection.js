const mongoose = require("mongoose");

const url =
  process.env.MONGOURL;

const connection = async () => {
  return mongoose.connect(url);
};

module.exports = connection;
