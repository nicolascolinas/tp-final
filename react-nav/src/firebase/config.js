// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClaP6I8eG0wuV-3ez1DzHzkCBBlYOGnwc",
  authDomain: "nicolas-colinas.firebaseapp.com",
  projectId: "nicolas-colinas",
  storageBucket: "nicolas-colinas.appspot.com",
  messagingSenderId: "244080514712",
  appId: "1:244080514712:web:64773b91858e0e93f9e2ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}