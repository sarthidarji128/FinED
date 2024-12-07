// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHrGGzzc2WYWmNm3ri9npQ35PUepCMtWE",
  authDomain: "bringit-5a511.firebaseapp.com",
  projectId: "bringit-5a511",
  storageBucket: "bringit-5a511.firebasestorage.app",
  messagingSenderId: "886136030339",
  appId: "1:886136030339:web:d8094d21a6e6abfea387b6",
  measurementId: "G-JWRX1T2VDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
