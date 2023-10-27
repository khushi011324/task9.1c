// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
//   authDomain: "fir-auth-1132.firebaseapp.com",
//   projectId: "fir-auth-1132",
//   storageBucket: "fir-auth-1132.appspot.com",
//   messagingSenderId: "1029021654707",
//   appId: "1:1029021654707:web:14aa4dee98449061701ac6",
//   measurementId: "G-MFP6M081T7",
// };

// const app = initializeApp(firebaseConfig);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEf35cX6wVULPUP39jH4FHd9Dznl-eSXM",
  authDomain: "fullstack-303c1.firebaseapp.com",
  projectId: "fullstack-303c1",
  storageBucket: "fullstack-303c1.appspot.com",
  messagingSenderId: "708904683299",
  appId: "1:708904683299:web:7d6e023f66a9b52e30ee96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth();
 export { app, auth };