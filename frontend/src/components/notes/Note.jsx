import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Create, Delete } from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../store/actions/noteActions";

const useStyles = makeStyles({
  noteStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "##081426",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Note = ({ note, setNote, notes }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleOnUpdateClick = (id) => {
    const foundNote = notes.find((note) => note._id === id);
    setNote({ ...foundNote });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <div className={classes.noteStyle}>
        <div className="note">
          <Typography variant="body2" className={classes.moreStyle}>
            {note.name}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            Added: {moment(note.date).fromNow()}
          </Typography>
        </div>
        <div>
          {auth._id && auth._id === note.uid ? (
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => handleOnUpdateClick(note._id)}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(note._id)}>
                <Delete color="secondary" />
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Note;
