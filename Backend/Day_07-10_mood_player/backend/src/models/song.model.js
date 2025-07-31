const { default: mongoose } = require("mongoose");

const songsSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
  mood: String,
});

const songModel = mongoose.model("song", songsSchema);

module.exports = songModel;
