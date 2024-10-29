const router = require("express").Router();
const {
  readFromFile, writeToFile, readAndAppend
} = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid"); // For generating unique note IDs
// const path = require("path");

// TODO: Define the path to the database JSON file
const filePath = "db/db.json";

router.get("/notes", (req, res) => {
  readFromFile(filePath)
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/notes", (req, res) => {

  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: "Note title and text required!" });
  }

  const newNote = {
    title,
    text,
    id: uuidv4(),
  };

  readAndAppend(newNote, filePath);
  res.json(newNote);
});

// DELETE Route for deleting a note by ID
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  
  readFromFile('./db/db.json')
      .then((data) => {
          let notes = JSON.parse(data);
          // Check if the data is not empty before parsing
          if (!notes) {
              notes = [];
          }
          const updatedNotes = notes.filter((note) => note.note_id !== noteId);
          writeToFile('./db/db.json', updatedNotes);
          res.json({ message: 'Note deleted successfully' });
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({ error: 'Failed to delete note' });
      });
});

module.exports = notes;