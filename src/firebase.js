// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuvzni8ivpAZHRaLdk_ogdBrGdqxhzZPE",
  authDomain: "todo-react-version-db04b.firebaseapp.com",
  projectId: "todo-react-version-db04b",
  storageBucket: "todo-react-version-db04b.appspot.com",
  messagingSenderId: "560927218060",
  appId: "1:560927218060:web:6c55e7bf1ef2c54f8a5ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};