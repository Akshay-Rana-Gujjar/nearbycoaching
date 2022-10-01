// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcsLWMJj8t0qEgq0KNLN97rYNh1miPt1g",
  authDomain: "near-by-coaching.firebaseapp.com",
  projectId: "near-by-coaching",
  storageBucket: "near-by-coaching.appspot.com",
  messagingSenderId: "269197611378",
  appId: "1:269197611378:web:397dc1222c15bc4e0b0deb",
  measurementId: "G-TFKLTTRY70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
if(typeof window != 'undefined'){
    const analytics = getAnalytics(app);
}