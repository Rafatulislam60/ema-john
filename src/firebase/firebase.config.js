// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRRkgDkg1nEbdXUxjH20u8IzRLMC341c",
  authDomain: "ema-john-with-firebase-a-87a9f.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-87a9f",
  storageBucket: "ema-john-with-firebase-a-87a9f.appspot.com",
  messagingSenderId: "775605258599",
  appId: "1:775605258599:web:a52c98f3cea55cf18987c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;