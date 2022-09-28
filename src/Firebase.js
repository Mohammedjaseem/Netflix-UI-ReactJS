// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6HDRU7V7_gBKjpum4eLkEjbUlUbj6WNs",
  authDomain: "netflix-react-js-24601.firebaseapp.com",
  projectId: "netflix-react-js-24601",
  storageBucket: "netflix-react-js-24601.appspot.com",
  messagingSenderId: "742430639938",
  appId: "1:742430639938:web:cfc7290297665d6115aadb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)