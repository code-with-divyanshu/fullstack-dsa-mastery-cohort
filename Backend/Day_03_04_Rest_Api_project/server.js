const express = require("express");

//  define port
const PORT = 3000;

//  create server
const app = express();

// middleware to work with req.body
app.use(express.json());

//  notes array to store notes
let notes = [];

//  To connect server

app.get("/", (req, res) => {
  res.send("Express Server Created : Notes Creation Api");
});

// *  notes api - creation -> {title, description} *//

//  To create new notes - use post http method
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "Note Created Successflly",
    notes: notes,
  });
});

// To show all notes - use get http method
app.get("/notes", (req, res) => {
  res.send(notes);
});

//  To delete notes by there index - use delete http method
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: `Notes Deleted Successfully at Index: ${index}`,
  });
});

//  To update notes by there index - use patch http method
app.patch("/notes/:index", (req, res) => {
  let index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;
  res.json({
    message: `Notes Updated Successfully at Index: ${index}`,
  });
});

// start server at PORT
app.listen(PORT, () => {
  console.log(
    `Server is running on Port : ${PORT} \n http://localhost:${PORT}`
  );
});
