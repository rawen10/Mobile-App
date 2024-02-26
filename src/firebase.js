// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDivZRKw5l69_QnAxumjquATsobsZGVk8M",
  authDomain: "arcane-splicer-412123.firebaseapp.com",
  projectId: "arcane-splicer-412123",
  storageBucket: "arcane-splicer-412123.appspot.com",
  messagingSenderId: "37539818856",
  appId: "1:37539818856:web:cabf6fd2f22ac5e9eafadd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;