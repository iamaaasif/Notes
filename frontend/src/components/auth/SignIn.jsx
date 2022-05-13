import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      {/* <section className="ctn"> */}
      <section className="top-ctn">
        {/* <h1 className="login-title">NOTES</h1> */}
        <h3 className="greet-msg">Welcome Back!</h3>
      </section>
      <section className="middle-ctn">
        <form
          className="loginForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            id="pass"
            name="password"
            minlength="8"
            required
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <br />
          <section class="bottom-ctn">
            <button type="submit" onClick={handleSubmit}>
              Sign in
            </button>
            {/* <button type="submit" id="sign-up">
                Sign up
              </button> */}
          </section>
        </form>
        {/* </section> */}

        {/* <Typography variant="h5">signIn;</Typography> */}
        {/* <TextField
          className={classes.spacing}
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        /> */}
        {/* <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        /> */}
        {/* <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          SignIn
        </Button> */}
      </section>
    </>
  );
};

export default SignIn;
