const express = require("express");
const router = express.Router();
const Note = require("../models/note-model");

//read all notes
router.get("/notes", (req, res) => {
  Note.find({})
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Error: " + err));
});


//read a particular note
router.get('/notes/:id', function(req, res) { 
  Note.findById(req.params.id, function(err, note) {
    if (!note) {
      res.status(404).send("Note could not be found.");
    } else {
      res.json(note);
    }
  });
});

//create a new note
router.post("/notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = new Note({
    title,
    content,
  });

  //const newNote = new Note(req.body);

  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


//update a particular note
router.put('/notes/update/:id', function(req, res){   
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json("Note updated.");
    })
    .catch(err => {
      res.status(422).send("Note update failed. Error: " + err);
    });
});


//delete a particular note
router.delete('/notes/:id', function(req, res) {  
  Note.findById(req.params.id, function(err, note) {
    if (!note) {
      res.status(404).send("Note not found.");
    } else {
      Note.findByIdAndRemove(req.params.id)
        .then(() => { 
            res.status(200).json("Note deleted."); 
          })
        .catch(err => {
          res.status(400).send("Note delete failed. Error: " + err);
        });
    }
  });
});


module.exports = router;
