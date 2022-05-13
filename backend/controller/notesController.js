const auth = require("../middleware/auth");
const { Note } = require("../models/note");
const Joi = require("joi");

const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ date: -1 });
    const filteredNotes = notes.filter((note) => note.uid === req.user._id);
    res.send(filteredNotes);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const postNotes = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, author, date, uid } = req.body;

  let note = new Note({ name, author, date, uid });

  note = await note.save();
  res.send(note);
};

const deleteNotes = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).send("Note not found...");

  if (note.uid !== req.user._id)
    return res.status(401).send("Note deletion failed. Not authorized...");

  const deletedNote = await Note.findByIdAndDelete(req.params.id);

  res.send(deletedNote);
};

const updateNotes = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).send("Note not found...");

  if (note.uid !== req.user._id)
    return res.status(401).send("Note update failed. Not authorized...");

  const { name, author, date, uid } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { name, author, date, uid },
    { new: true }
  );

  res.send(updatedNote);
};

module.exports = { getNotes, postNotes, deleteNotes, updateNotes };
