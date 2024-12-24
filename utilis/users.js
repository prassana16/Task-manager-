import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import db from firebase.js

const getUsers = async () => {
  try {
    const usersCollection = collection(db, "users"); // Reference the "users" collection
    const snapshot = await getDocs(usersCollection); // Get the documents in the collection
    snapshot.docs.forEach((doc) => console.log(doc.data())); // Log each document's data
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export { getUsers };