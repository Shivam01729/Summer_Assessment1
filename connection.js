const mongoose = require("mongoose");

const url =
  "mongodb+srv://shivamsingh97719:DSksyReRiaLXQeQG@cluster0.a8xoxhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
";

const connection = async () => {
  return mongoose.connect(url);
};

module.exports = connection;
