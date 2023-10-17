// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY0G266Xi_O_LtzCHCGpGCs8hyFYNifKE",
  authDomain: "thriller-travels-68003.firebaseapp.com",
  projectId: "thriller-travels-68003",
  storageBucket: "thriller-travels-68003.appspot.com",
  messagingSenderId: "773374697506",
  appId: "1:773374697506:web:1a82af06aad5c3889eaa7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);