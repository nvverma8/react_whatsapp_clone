// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


 
const firebaseConfig = {
  apiKey: "AIzaSyBPQC6Idhi1mLioHzA_6vgFuTwYRjQzgqc",
  authDomain: "new-clone-ab04f.firebaseapp.com",
  projectId: "new-clone-ab04f",
  storageBucket: "new-clone-ab04f.appspot.com",
  messagingSenderId: "335226502805",
  appId: "1:335226502805:web:8204f39d83f9f8e449e59c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
export const storage = firebase.storage()

