// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmxsn-4qmS6rX6WjYkjAeHelL_RDaoqRk",
  authDomain: "traderx-aaa2b.firebaseapp.com",
  projectId: "traderx-aaa2b",
  storageBucket: "traderx-aaa2b.appspot.com",
  messagingSenderId: "108885013966",
  appId: "1:108885013966:web:cd7c1d44801b3209f0279f",
  measurementId: "G-DLLNXWZ5X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }