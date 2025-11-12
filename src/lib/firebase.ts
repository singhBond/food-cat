// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeGbpnuOCU46uC9Bz9UwX2JrmJ1r_UDQw",
  authDomain: "food-cat-118d5.firebaseapp.com",
  projectId: "food-cat-118d5",
  storageBucket: "food-cat-118d5.firebasestorage.app",
  messagingSenderId: "866456771942",
  appId: "1:866456771942:web:1ff09c83db07831ddefca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: Export app if needed elsewhere
export default app;