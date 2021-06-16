// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmGpOtavD6hi8UkkYcmQmG0IvTdwdsqf0",
    authDomain: "learn-tehguide.firebaseapp.com",
    projectId: "learn-tehguide",
    storageBucket: "learn-tehguide.appspot.com",
    messagingSenderId: "607927062354",
    appId: "1:607927062354:web:22f781780129286cd1b48b",
    measurementId: "G-YYBDTK6ZRL"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);