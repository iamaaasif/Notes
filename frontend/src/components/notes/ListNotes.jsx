import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getNotes } from "../../store/actions/noteActions";
import Note from "./Note";
const useStyles = makeStyles({
  notesStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListNotes = ({ note, setNote }) => {
  const auth = useSelector((state) => state.auth);
  const notes = useSelector((state) => state.notes);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [note._id, dispatch]);

  if (!auth._id) return <Redirect to="/signin" />;

  return (
    <>
      <div className={classes.notesStyle}>
        <Typography variant="h5">
          {" "}
          {notes.length > 0 ? "" : "You haven't create any notes yet!"}{" "}
        </Typography>
        {notes &&
          notes.map((note) => {
            return (
              <Note
                note={note}
                key={note._id}
                setNote={setNote}
                notes={notes}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListNotes;
