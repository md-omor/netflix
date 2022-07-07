// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0   later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqUq-GJ3ypstzvkq7FuEZMPgrPh_R2pFM",
  authDomain: "netflix-5dc9b.firebaseapp.com",
  projectId: "netflix-5dc9b",
  storageBucket: "netflix-5dc9b.appspot.com",
  messagingSenderId: "427583631105",
  appId: "1:427583631105:web:d11d7604ceb943fc1cb500",
  measurementId: "G-DD8MDV92MM",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
