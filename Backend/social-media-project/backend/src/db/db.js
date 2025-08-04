const { default: mongoose } = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Server is Connect to Database");
    })
    .catch((err) => {
      console.log("Error While Connected to DB", err);
    });
};

module.exports = connectToDB;
