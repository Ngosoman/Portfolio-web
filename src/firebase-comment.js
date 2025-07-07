import { initializeApp, getApps } from "firebase/app";
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

// Only initialize if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
