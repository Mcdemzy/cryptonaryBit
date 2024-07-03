import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBOiANEpDK9b0qb5a-sAT0SLwZDLFpXmws",
    authDomain: "cryptonarybit-11d1a.firebaseapp.com",
    projectId: "cryptonarybit-11d1a",
    storageBucket: "cryptonarybit-11d1a.appspot.com",
    messagingSenderId: "189066314761",
    appId: "1:189066314761:web:e616d5a141c2c8e2baa4d8",
    measurementId: "G-MN0Q9B4KWL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);