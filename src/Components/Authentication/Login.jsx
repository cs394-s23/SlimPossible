import React, { useEffect } from "react";
import "./Login.css";
import Logo from "./Logo.png";

const Login = () => {
  const signinWithGoogle = () => {
    alert("logic here!");
  };

  return (
    <div className="loginPage">
      <div className="app-logo">
        <img src={Logo} />
      </div>

      <form>
        <button
          type="button"
          onClick={signinWithGoogle}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
