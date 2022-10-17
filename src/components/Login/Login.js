import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import googleLogo from "../../google.png";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="title-text">Login</h2>
      <form className="form-field">
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email" required />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" required />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <p className="text-new">
          New to AnNisa Shop?{" "}
          <Link className="link-text" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="or-text">
          <hr /> <span>or</span> <hr />
        </div>
        <button className="google-btn" type="submit">
          <img src={googleLogo} alt="" /> <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
