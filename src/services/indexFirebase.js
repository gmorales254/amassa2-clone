// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2tBMHV7Y0dgOTrSKC2cKIXbBpgPBQBWU",
  authDomain: "ecommerce-amassa2.firebaseapp.com",
  projectId: "ecommerce-amassa2",
  storageBucket: "ecommerce-amassa2.appspot.com",
  messagingSenderId: "840604647686",
  appId: "1:840604647686:web:7147cd028818fdc9615e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db