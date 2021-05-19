import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrou6i78coXhnQR6HC5sk-quB2eRqHpdg",
  authDomain: "fb-2-cl.firebaseapp.com",
  projectId: "fb-2-cl",
  storageBucket: "fb-2-cl.appspot.com",
  messagingSenderId: "646876360482",
  appId: "1:646876360482:web:438c77701ab3914feabf7b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
