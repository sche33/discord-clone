// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbFd3QvDyktUEJuVPfvXzKNhRZqPMUnbc",
  authDomain: "dcsw-6a3ed.firebaseapp.com",
  projectId: "dcsw-6a3ed",
  storageBucket: "dcsw-6a3ed.firebasestorage.app",
  messagingSenderId: "86054465190",
  appId: "1:86054465190:web:7588bcceb70f3f089cce67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
