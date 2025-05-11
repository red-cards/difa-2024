// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoxYp1WOTnbbA0NB34MSGsWAWAOISTT_I",
  authDomain: "catalog-difa.firebaseapp.com",
  projectId: "catalog-difa",
  storageBucket: "catalog-difa.firebasestorage.app",
  messagingSenderId: "866579946796",
  appId: "1:866579946796:web:d4e9bc49b1329e191ba089",
  measurementId: "G-9RHE3PL2VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);