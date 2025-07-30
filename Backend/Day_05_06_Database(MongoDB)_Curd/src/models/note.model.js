const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// noteSchema.set("timestamps", true);

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
