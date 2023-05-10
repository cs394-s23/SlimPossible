import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDE9nF_Ghno85E9jdPY3qf5ASxTc3odNVM",
    authDomain: "slimpossible-34902.firebaseapp.com",
    databaseURL: "https://slimpossible-34902-default-rtdb.firebaseio.com",
    projectId: "slimpossible-34902",
    storageBucket: "slimpossible-34902.appspot.com",
    messagingSenderId: "858747206804",
    appId: "1:858747206804:web:2567fcbd6f40a1fbcb0881"
  };


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();

// auth
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


// Test if the app is currently in production mode

// console.log(import.meta.env.NODE_ENV)
// console.log(window.EMULATION)

// Exporting DB Title
const DbTitle = "users";

export default db;
export const storage = getStorage(firebaseApp);
export { auth, provider };
export { DbTitle} ;