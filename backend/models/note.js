const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 200 },
  author: String,
  uid: String,
  date: { type: Date, default: new Date() },
});

const Note = mongoose.model("Note", noteSchema);

exports.Note = Note;
