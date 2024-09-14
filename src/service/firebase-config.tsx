// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrXPPPlbuHoAMYI4m572U5rVPCCEidwrw",
  authDomain: "acervoamaranto.firebaseapp.com",
  projectId: "acervoamaranto",
  storageBucket: "acervoamaranto.appspot.com",
  messagingSenderId: "75787897415",
  appId: "1:75787897415:web:3e094f239438d5fbbf3f62",
  measurementId: "G-HPZ3ML9F3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);