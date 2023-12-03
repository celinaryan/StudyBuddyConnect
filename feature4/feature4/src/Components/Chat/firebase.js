import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLFYA3V1ECRm7NaRIGW7urwRprboIMi8",
  authDomain: "study-buddy-connect.firebaseapp.com",
  projectId: "study-buddy-connect",
  storageBucket: "study-buddy-connect.appspot.com",
  messagingSenderId: "422442026361",
  appId: "1:422442026361:web:44a0b54cada1f2a5211ba8",
  measurementId: "G-0HT8MPFHQC"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
export default app;