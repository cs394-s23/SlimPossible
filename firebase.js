import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const db = getFirestore(app);

// Export Firebase services for use in other parts of your application
export default db;
export {app};
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

export default db;
export const storage = getStorage(firebaseApp);
export { auth, provider };
export { DbTitle} ;