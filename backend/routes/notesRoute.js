const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

const {
  getNotes,
  postNotes,
  deleteNotes,
  updateNotes,
} = require("../controller/notesController");

router.get("/", auth, getNotes);

router.post("/", auth, postNotes);

router.put("/:id", auth, updateNotes);

router.delete("/:id", auth, deleteNotes);

module.exports = router;
