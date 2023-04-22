import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa38ADX3doisdLWOx9kLHKfdXOB8gn_-0",
  authDomain: "challenges-f1b27.firebaseapp.com",
  projectId: "challenges-f1b27",
  storageBucket: "challenges-f1b27.appspot.com",
  messagingSenderId: "417798039366",
  appId: "1:417798039366:web:01dc4d2958e3cc3eea2747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {app, auth}