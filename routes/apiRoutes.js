const app = require('express').Router();

const {notes } = require('../db/db');
    
const {
    createNewNote,
    findById,
    removeNote
} = require('../libs/notes');


  // GET request
app.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// POST request
app.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

// DELETE request
app.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});


module.exports = app;


