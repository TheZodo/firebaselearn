// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9FaxHnmevL6yD0auC7G73BnbRjcwIVHs",
  authDomain: "fir-frontend-c89ea.firebaseapp.com",
  projectId: "fir-frontend-c89ea",
  storageBucket: "fir-frontend-c89ea.appspot.com",
  messagingSenderId: "1002364281743",
  appId: "1:1002364281743:web:f627dd1f6f8da19b0861fa",
  measurementId: "G-ZV2SNDQH01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
