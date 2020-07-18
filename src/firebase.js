import firebase from "firebase";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "tinnhan-80287.firebaseapp.com",
  databaseURL: "https://tinnhan-80287.firebaseio.com",
  projectId: "tinnhan-80287",
  storageBucket: "tinnhan-80287.appspot.com",
  messagingSenderId: "966727704901",
  appId: process.env.APP_ID,
  measurementId: "G-F44863RB1M",
});

const db = firebaseApp.firestore();

export default db;
