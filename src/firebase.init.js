// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANVn5xRagpH6_TBCThH1i3xWR07pLNrgM",
  authDomain: "performcamp-8967f.firebaseapp.com",
  projectId: "performcamp-8967f",
  storageBucket: "performcamp-8967f.appspot.com",
  messagingSenderId: "617663440363",
  appId: "1:617663440363:web:84bb2991eba27ec4cba5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;