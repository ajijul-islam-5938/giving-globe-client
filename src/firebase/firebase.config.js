// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4e4t8SzdgtNbUW-gJARPB7VuIR87V53Q",
  authDomain: "assignment-11-1edee.firebaseapp.com",
  projectId: "assignment-11-1edee",
  storageBucket: "assignment-11-1edee.appspot.com",
  messagingSenderId: "973043756619",
  appId: "1:973043756619:web:f103039e03bacfe214e7ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;