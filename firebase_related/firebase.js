import firebase from "firebase/app";
import "firebase/auth"; // If you plan to use authentication
import "firebase/firestore"; // If you plan to use Firestore as the database
import "firebase/storage"; // If you plan to use Firebase Storage
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE9nF_Ghno85E9jdPY3qf5ASxTc3odNVM",
  authDomain: "slimpossible-34902.firebaseapp.com",
  databaseURL: "https://slimpossible-34902-default-rtdb.firebaseio.com",
  projectId: "slimpossible-34902",
  storageBucket: "slimpossible-34902.appspot.com",
  messagingSenderId: "858747206804",
  appId: "1:858747206804:web:2567fcbd6f40a1fbcb0881",
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Export Firebase services for use in other parts of your app
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const provider = new GoogleAuthProvider();
