// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "fir-96133.firebaseapp.com",
  projectId: "fir-96133",
  storageBucket: "fir-96133.appspot.com",
  messagingSenderId: "681439950813",
  appId: "1:681439950813:web:cbca27a7cff0b1a0612834",
  measurementId: "G-8301ECECWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
