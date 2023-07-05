// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8VMxr2hgf9ygEebFXSzQgp5MwJXPj0g",
  authDomain: "projectmerkle.firebaseapp.com",
  projectId: "projectmerkle",
  storageBucket: "projectmerkle.appspot.com",
  messagingSenderId: "382101131206",
  appId: "1:382101131206:web:4128bb45b042a5d0a4acc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();