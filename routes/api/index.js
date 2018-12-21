const express = require('express');
const router = express.Router();

//db models

const db = require("../../models/index");

// article routes
// get all saved articles
router.get("/api/saved", (req,res)=>{
    db.Article.find()
        .sort({date: -1})
        .then(articles => res.json(articles));
});
// save an article
router.post("/api/saved", (req,res)=>{

});
// delete an article from saved
router.delete("/api/saved/:id", (req,res)=>{

});

// note routes
// get notes associated with an article
router.get("/api/notes/article/:id", (req,res)=>{

});
// post a note associated with the current article
router.post("/api/notes/article/:id", (req,res)=>{

});

// delete a note
router.delete("/api/notes/:id", (req,res)=>{

});


module.exports = router;