import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  authButton: {
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fafafa",
  },
}));

const NavBar = () => {
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
      <header>
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
              <button
                className="sign-out"
                onClick={() => {
                  history.push("/signin");
                }}
              >
                Login
              </button>
              <button
                className="sign-out"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Register
              </button>
            </>
          )}
        </section>
      </header>
    </>
  );
};

export default NavBar;
