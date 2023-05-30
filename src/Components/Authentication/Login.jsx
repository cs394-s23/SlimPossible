import React from "react";
import "./Login.css";
import Logo from "./Logo.png";
import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import db from "../../../firebase.js";
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const getUserFromFirebase = async (userEmail) => {
    const userIdsDocRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(userIdsDocRef);
    console.log("Seeing docsnap data");
    console.log(docSnap.data());
    console.log(docSnap.data() != null);
    return docSnap.data() != null;
  }

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async function(result) {
        var userName = result.user.displayName;
        var userEmail = result.user.email;
        var imgUrl = result.user.photoURL;

        localStorage.setItem("name", userName);
        localStorage.setItem("image", imgUrl);
        localStorage.setItem("email", userEmail);

        // see if the user exists in the database
        const foundUser = await getUserFromFirebase(userEmail);

        if (foundUser) {
          // navigate to homepage if login is successful
          console.log("User Found!");
          navigate("/");
          window.location.reload();
          return;
        }

        console.log("User not found");

        // create a document firebase;
        const userIdsDocRef = doc(db, "users", userEmail);
        const newData = {
          daily_calorie_goal: null,
        };
        setDoc(userIdsDocRef, newData)
          .then(() => {
            console.log('Document "userIds" created successfully');
            setErrorMessage("");

            // navigate to homepage if login is successful
            navigate("/");
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error creating document: ", error);
            setErrorMessage("Error signing in. Please try again.")
          });

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
        <h3 className="errorMessage">{errorMessage}</h3>
      </form>
    </div>
  );
};

export default Login;
