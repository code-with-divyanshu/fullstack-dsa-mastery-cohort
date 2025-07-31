const { default: mongoose } = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.error("Error to connecting to MonogoDb", err);
    });
};

module.exports = connectToDB;
