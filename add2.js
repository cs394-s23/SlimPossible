const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./slimpossible-34902-firebase-adminsdk-sf61v-316e179821.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Access Firestore
const db = admin.firestore();

// Define user ID
const user_id = "user1"; // Replace with the actual user ID
const user_id2 = "user2";

// Define meal data
const meal_data = {
  name: "Breakfast",
  calories: 350,
  timestamp: admin.firestore.FieldValue.serverTimestamp(),
  flag: false
};

// Upload meal data to user collection and meal subcollection
const user_ref = db.collection("userss").doc(user_id);
const meal_ref = user_ref.collection("meals").add(meal_data);

const user_ref2 = db.collection("userss").doc(user_id2);
const meal_ref2 = user_ref2.collection("meals").add(meal_data);

// Print the ID of the newly created meal document
meal_ref.then((docRef) => {
  console.log("Meal ID:", docRef.id);
}).catch((error) => {
  console.error("Error adding meal document:", error);
});