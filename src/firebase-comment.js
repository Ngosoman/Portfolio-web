import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
  authDomain: "web-kelas-tes.firebaseapp.com",
  projectId: "web-kelas-tes",
  storageBucket: "web-kelas-tes.appspot.com",
  messagingSenderId: "890817433268",
  appId: "1:890817433268:web:11e5258f8864a6174c11e1"
};

// You don't need a custom name unless using multiple apps
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
