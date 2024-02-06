import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDwVu1jIOMggciAIG0xzq7hw7mSaJfcmeU",
    authDomain: "react-app-69c4b.firebaseapp.com",
    databaseURL: "https://react-app-69c4b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-app-69c4b",
    storageBucket: "react-app-69c4b.appspot.com",
    messagingSenderId: "477973192612",
    appId: "1:477973192612:web:7e736e1cec5075eb9eab31",
    measurementId: "G-0BLJQC5PP6"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  
  export const db = getFirestore(app);
  export const storage = getStorage(app);