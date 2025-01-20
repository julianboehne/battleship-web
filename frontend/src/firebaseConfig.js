// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeanO8Co11tQqG61WRqkn8sgOJ3N535_s",
    authDomain: "battleship-web-ee919.firebaseapp.com",
    projectId: "battleship-web-ee919",
    storageBucket: "battleship-web-ee919.firebasestorage.app",
    messagingSenderId: "747272421844",
    appId: "1:747272421844:web:8435ffb685f0f41ec39641",
    measurementId: "G-4X1BNT6HT2"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }