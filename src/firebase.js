import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA84ZkXVgcskeztqRotlN5K2tGrb5ahGA4",
  authDomain: "blog-2a82e.firebaseapp.com",
  projectId: "blog-2a82e",
  storageBucket: "blog-2a82e.appspot.com",
  messagingSenderId: "183089243567",
  appId: "1:183089243567:web:6a73550f09b60193c87b5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };