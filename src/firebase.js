// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwMgbvbJLwbvQGnB6Xq3QZCxgqJmRqZns",
  authDomain: "netflix-react-db836.firebaseapp.com",
  projectId: "netflix-react-db836",
  storageBucket: "netflix-react-db836.appspot.com",
  messagingSenderId: "650034231255",
  appId: "1:650034231255:web:a726850920e7f3cfef7d92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

