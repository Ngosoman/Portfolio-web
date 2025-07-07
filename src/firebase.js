import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh2LAoF8RNGVZvdLL2DSuDXCCem-iNwVo",
  authDomain: "react-eba8b.firebaseapp.com",
  projectId: "react-eba8b",
  storageBucket: "react-eba8b.appspot.com", // 🔥 fixed `.app` to `.appspot.com`
  messagingSenderId: "513535066519",
  appId: "1:513535066519:web:21a71982c0c68cb6b8c4d2",
  measurementId: "G-JHKEC60KE2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
