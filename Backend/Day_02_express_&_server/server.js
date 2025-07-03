const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Express Server Created");
});

app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the About Page");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT);
});
