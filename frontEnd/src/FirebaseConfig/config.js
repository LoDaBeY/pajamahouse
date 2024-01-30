// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2148cU5oYrT4g4qwrfeRLf3jvhnCeHg",
  authDomain: "pijamahouse-e1870.firebaseapp.com",
  projectId: "pijamahouse-e1870",
  storageBucket: "pijamahouse-e1870.appspot.com",
  messagingSenderId: "1077538316711",
  appId: "1:1077538316711:web:a5c351947a015a8da61682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
