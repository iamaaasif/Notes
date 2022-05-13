import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            id="name"
            required
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label for="email">Email Address</label>
          <br />
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            id="email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label for="pass">Password</label>
          <br />
          <input
            type="password"
            placeholder="At least 8 characters"
            id="pass"
            name="password"
            minlength="8"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <section class="bottom-ctn">
          <button type="submit" className="sign-up-btn">
            {" "}
            Sign up
          </button>
        </section>
      </form>
    </>
  );
};

export default SignUp;
