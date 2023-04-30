import React, { useEffect, useState } from "react";
import "./Login.css";
import Logo from "./Logo.png";
// import { auth, provider } from "../../../firebase_related/firebase";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  // const signinWithGoogle = () => {
  //   auth()
  //     .signInWithRedirect(provider)
  //     .then((result) => {
  //       const userName = result.user.displayName;
  //       var userEmail = result.user.email;
  //       var imgUrl = result.user.photoURL;

  //       setEmail(userEmail);
  //       setImg(imgUrl);
  //       setName(userName);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       return;
  //     });
  // };

  return (
    <div className="loginPage">
      <div className="app-logo">
        <img src={Logo} />
      </div>

      <form>
        <button
          type="button"
          // onClick={signinWithGoogle}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
