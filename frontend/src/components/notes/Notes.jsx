import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import AddNote from "./AddNote";
import ListNotes from "./ListNotes";

const Notes = () => {
  const auth = useSelector((state) => state.auth);
  const [note, setNote] = useState({
    name: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      {/* <header>
        <section className="left">
          <h1 class="title">Notes</h1>
        </section>
        <section className="right">
          {user._id ? (
            <>
              {" "}
              <h3 className="user">{user.name}</h3>
              <button
                type="button"
                className="sign-out"
                onClick={() => handleSignOut()}
              >
                Sign out
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <Button className="sign-out">
                <Link to="/signin">SignIn</Link>
              </Button>
              <Button className="sign-out">
                <Link to="/signup">SignUp</Link>
              </Button>{" "}
            </>
          )}
        </section>
      </header> */}

      {auth._id ? (
        <>
          <AddNote note={note} setNote={setNote} />
          <ListNotes note={note} setNote={setNote} />
        </>
      ) : (
        <>
          <ListNotes note={note} setNote={setNote} />
        </>
      )}
    </>
  );
};

export default Notes;
