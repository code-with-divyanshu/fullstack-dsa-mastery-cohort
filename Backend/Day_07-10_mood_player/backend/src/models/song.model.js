const { default: mongoose } = require("mongoose");

const songsSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
});

const song = mongoose.model("song", songsSchema);

module.exports = song;
