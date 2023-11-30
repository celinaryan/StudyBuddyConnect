import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLFYA3V1ECRm7NaRIGW7urwRprboIMi8",
  authDomain: "study-buddy-connect.firebaseapp.com",
  projectId: "study-buddy-connect",
  storageBucket: "study-buddy-connect.appspot.com",
  messagingSenderId: "422442026361",
  appId: "1:422442026361:web:44a0b54cada1f2a5211ba8",
  measurementId: "G-0HT8MPFHQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initializing services
const auth = getAuth();
const db = getFirestore();

export { app, analytics, auth, db };