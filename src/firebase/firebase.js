// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBnToKhal786KF3TpmiQFVm1gZ4wVPhPs",
  authDomain: "first-swipe-c2d6b.firebaseapp.com",
  databaseURL: "https://first-swipe-c2d6b-default-rtdb.firebaseio.com",
  projectId: "first-swipe-c2d6b",
  storageBucket: "first-swipe-c2d6b.firebasestorage.app",
  messagingSenderId: "994368593130",
  appId: "1:994368593130:web:bcce96d481a49f733c8b93",
  measurementId: "G-Y85RGNLHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics, createUserWithEmailAndPassword };
