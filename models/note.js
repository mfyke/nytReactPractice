const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;