// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT6gtYdONiBt0lrbYrXR-83LkaX3mfBOo",
  authDomain: "my-app-ab39b.firebaseapp.com",
  projectId: "my-app-ab39b",
  storageBucket: "my-app-ab39b.firebasestorage.app",
  messagingSenderId: "762796860497",
  appId: "1:762796860497:web:850e1f99a8b983db8ec470",
  measurementId: "G-098KEVTL0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();