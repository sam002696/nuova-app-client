import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxFG_vh7UpJREn8vRHYS3r6yq98P7x2w0",
  authDomain: "chat-app221.firebaseapp.com",
  projectId: "chat-app221",
  storageBucket: "chat-app221.appspot.com",
  messagingSenderId: "245328056144",
  appId: "1:245328056144:web:b6e6074950c4a8ef8d2655",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
