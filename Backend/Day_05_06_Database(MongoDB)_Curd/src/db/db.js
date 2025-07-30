const { default: mongoose } = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://divyanshubartwal67:p8naLoRshLlqazoU@cluster0.0c0wlst.mongodb.net/cohort_learning"
    )
    .then(() => {
      console.log("DB connected successfully");
    });
};

module.exports = connectToDB;
