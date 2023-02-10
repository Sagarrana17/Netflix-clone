// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwO2TkZqo4Oe9oKnz-MqnvBOzNgym_Hs",
  authDomain: "netflix-clone-96521.firebaseapp.com",
  projectId: "netflix-clone-96521",
  storageBucket: "netflix-clone-96521.appspot.com",
  messagingSenderId: "536393105880",
  appId: "1:536393105880:web:685fe39d61593939c532ad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = get