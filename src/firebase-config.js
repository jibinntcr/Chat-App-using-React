// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe1PdGJFGbZbx5K_CJnueD-Qd5muuE7AA",
  authDomain: "mychatroomapp-e860d.firebaseapp.com",
  projectId: "mychatroomapp-e860d",
  storageBucket: "mychatroomapp-e860d.appspot.com",
  messagingSenderId: "984914757493",
  appId: "1:984914757493:web:3dbdfd6a0516407664f53c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();