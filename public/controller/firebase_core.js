// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy6XmbgYVSHDni7hlLxazqDCJH-R2N_tY",
    authDomain: "gkolli-cmsc5373-webapp.firebaseapp.com",
    projectId: "gkolli-cmsc5373-webapp",
    storageBucket: "gkolli-cmsc5373-webapp.appspot.com",
    messagingSenderId: "460751510813",
    appId: "1:460751510813:web:7984d7e3cc151be6aa55f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

console.log("Firebase App Initialized:", app);

