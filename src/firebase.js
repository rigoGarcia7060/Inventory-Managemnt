// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firestore, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "inventory-management-app-6157c.firebaseapp.com",
  projectId: "inventory-management-app-6157c",
  storageBucket: "inventory-management-app-6157c.appspot.com",
  messagingSenderId: "193645682533",
  appId: "1:193645682533:web:f553643327cba2f5d50b8c",
  measurementId: "G-SDHDYKBSSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

expoert {firestore}