// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1id1bulVq3lLUJhkzaNBKH363gp4WqEc",
  authDomain: "philricescannerapp.firebaseapp.com",
  databaseURL: "https://philricescannerapp-default-rtdb.firebaseio.com",
  projectId: "philricescannerapp",
  storageBucket: "philricescannerapp.firebasestorage.app",
  messagingSenderId: "57763195941",
  appId: "1:57763195941:web:e1c8e98a6905b53fc2e3cc",
  measurementId: "G-1S23JZ7X56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { database };