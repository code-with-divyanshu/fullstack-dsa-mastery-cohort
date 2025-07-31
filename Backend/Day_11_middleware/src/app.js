const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use((req, res, next) => {
  console.log("This Middleware is between app and router");
  next();
});

app.use("/", indexRoutes);

module.exports = app;
