const path = require ("path");
const router = require("express").Router();

// "/notes" needs to respond with notes.html files

router.get("/notes",)

// All other routes respond with html files

router.get("/notes",
(req, res) => {
    return 1 
}

)

module.exports = router;
