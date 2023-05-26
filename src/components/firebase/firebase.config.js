// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_APIKEY)
// console.log(import.meta.env.VITE_SOME_KEY) // 123
// console.log(import.meta.env.DB_PASSWORD) // undefined

console.log(import.meta.env.VITE_PASS) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined

// console.log('nahid')
const firebaseConfig = {
  
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.APPID
  
  apiKey: "AIzaSyDdi4lCGlc-hDTKpL-Eog7vH509lDme-1M",
  authDomain: "bd-chef.firebaseapp.com",
  projectId: "bd-chef",
  storageBucket: "bd-chef.appspot.com",
  messagingSenderId: "763836114723",
  appId: "1:763836114723:web:4fc541b1b0b7fb4c9d4e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;