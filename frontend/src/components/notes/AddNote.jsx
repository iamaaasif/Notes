import { makeStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../../store/actions/noteActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddNote = ({ note, setNote }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (note._id) {
      const id = note._id;
      const updatedNote = {
        name: note.name,
        date: note.date,
        author: note.author,
        uid: note.uid,
      };

      dispatch(updateNote(updatedNote, id));
    } else {
      const newNote = {
        ...note,
        date: new Date(),
      };

      dispatch(addNote(newNote));
    }
    setNote({ name: "" });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="create-note"
      >
        <textarea
          id="enter-note"
          type="text"
          value={note.name}
          placeholder="Add New Note..."
          onChange={(e) => setNote({ ...note, name: e.target.value })}
        />
        <button className={classes.submitButton} type="submit">
          <Send />
        </button>
      </form>
    </>
  );
};

export default AddNote;
