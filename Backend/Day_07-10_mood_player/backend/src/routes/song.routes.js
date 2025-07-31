const express = require("express");
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const songModel = require("../models/song.model");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

//  to create and save song data into database
router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileData = await uploadFile(req.file);
  console.log(fileData);

  // store data in database
  const song = await songModel.create({
    title: req.body.title,
    artist: req.body.artist,
    audio: fileData.url,
    mood: req.body.mood,
  });
  res.status(201).json({
    message: "Song Created Successfully",
    song,
  });
});

// get song data from databae according to mood
router.get("/songs", async (req, res) => {
  const { mood } = req.query;

  const songs = await songModel.find({
    mood,
  });

  res.status(200).json({
    message: "Song Fetched Successfully",
    songs,
  });
});

module.exports = router;
