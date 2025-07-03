const express = require("express");

const PORT = 3000;

//  create server
const app = express();

// middelware to see req.body

app.use(express.json());
let notes = [];

// *notes Api => title & description

// Create New Notes

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "Notes added successfully",
    notes: notes,
  });
});

// start server on port
app.listen(PORT, () => {
  console.log(
    "Server is running on PORT " + PORT + "\n http://localhost:3000/"
  );
});
