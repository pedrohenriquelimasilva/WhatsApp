import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTt4bVuyix0UAK5vyYFSEIqQ8tjlAhaGg",
  authDomain: "chatsystem-ba760.firebaseapp.com",
  projectId: "chatsystem-ba760",
  storageBucket: "chatsystem-ba760.appspot.com",
  messagingSenderId: "1071656241003",
  appId: "1:1071656241003:web:776f066034d362388c6e2e"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
