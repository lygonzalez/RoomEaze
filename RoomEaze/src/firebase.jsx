// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOyGapS-tCMZ1vFg5Oj5axgfw6O-9AONE",
  authDomain: "roomeaze-dc1cd.firebaseapp.com",
  projectId: "roomeaze-dc1cd",
  storageBucket: "roomeaze-dc1cd.firebasestorage.app",
  messagingSenderId: "913134082447",
  appId: "1:913134082447:web:adaafcec813671445513fa",
  measurementId: "G-C74PDENZQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };