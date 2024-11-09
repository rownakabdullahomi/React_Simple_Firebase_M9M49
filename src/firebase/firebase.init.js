// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxSfN2iDjMk2TOHhb61rwbCGxQ5D_C_po",
  authDomain: "simple-firebase-64791.firebaseapp.com",
  projectId: "simple-firebase-64791",
  storageBucket: "simple-firebase-64791.firebasestorage.app",
  messagingSenderId: "228861376465",
  appId: "1:228861376465:web:207cbcd2673db5c75652f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;