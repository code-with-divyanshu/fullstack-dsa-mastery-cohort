require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const Port = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express Server Created Successfully");
});

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  await noteModel.create({
    title,
    description,
  });

  res.json({
    msg: "Note  Created Successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    msg: "Notes fetch successfully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    msg: "Note Deleted Successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title, description } = req.body;
  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    { title, description }
  );

  res.json({
    msg: "Note updated Successfully",
  });
});

connectToDB();
app.listen(Port, () => {
  console.log(`Server is running on :  htttp://localhost:${Port}`);
});
