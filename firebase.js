import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// INSERT FIREBASE CONFIG HERE
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DbTitle = "users";

// Export Firebase services for use in other parts of your application
export default db;
export {app};
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export { DbTitle } ;