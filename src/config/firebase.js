import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB73QBkbxlDVm3aUwm4TLupjBZEosh1ofQ",
  authDomain: "telegram-clone-fd554.firebaseapp.com",
  projectId: "telegram-clone-fd554",
  storageBucket: "telegram-clone-fd554.appspot.com",
  messagingSenderId: "625295012286",
  appId: "1:625295012286:web:6e8c05cba230946e0509ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export {
    app,
    auth,
    provider, 
    storage,
    db
}