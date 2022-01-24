const router = require('express').Router();
const store = require('../db/store')

// GET "api/notes" responds with all notes from the database
router.get("/notes",
(req, res) => {
    return 1 
}

)



// DELETE "/api/notes"  deletes the note with an id equal to req.params.id

module.exports = router;