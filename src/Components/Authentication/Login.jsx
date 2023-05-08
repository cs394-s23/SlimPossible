import React from "react";
import "./Login.css";
import Logo from "./Logo.png";
import { auth, provider } from "../../../firebase_related/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        var userName = result.user.displayName;
        var userEmail = result.user.email;
        var imgUrl = result.user.photoURL;

        localStorage.setItem("name", userName);
        localStorage.setItem("image", imgUrl);
        localStorage.setItem("email", userEmail);

        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        return;
      });
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
