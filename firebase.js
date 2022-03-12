// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
import{ getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4anUZU2nCfXEpIf_hqgtRz2fVvzPNZmU",
  authDomain: "instagram-clone-alexa.firebaseapp.com",
  projectId: "instagram-clone-alexa",
  storageBucket: "instagram-clone-alexa.appspot.com",
  messagingSenderId: "917044577431",
  appId: "1:917044577431:web:22145ddbae61fde74995d2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }