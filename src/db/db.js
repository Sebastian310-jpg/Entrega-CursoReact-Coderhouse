/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDTrhrWLxEs9fjHimqz06PqYPPKJt_-b8",
  authDomain: "react-coderhouse-40c18.firebaseapp.com",
  projectId: "react-coderhouse-40c18",
  storageBucket: "react-coderhouse-40c18.firebasestorage.app",
  messagingSenderId: "846421784211",
  appId: "1:846421784211:web:83f30e3f222e33fe66bf66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db