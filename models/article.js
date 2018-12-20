const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;