const express = require("express");
const songRouter = require("./routes/song.routes");

const app = express();
app.use(express.json());
app.use("/", songRouter);

module.exports = app;
