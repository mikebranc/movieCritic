import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6qsgQajHMkwS9ZgLrrvjBchc4ReDCpKM",
  authDomain: "brady-9a097.firebaseapp.com",
  projectId: "brady-9a097",
  storageBucket: "brady-9a097.appspot.com",
  messagingSenderId: "80307267436",
  appId: "1:80307267436:web:6d5687491c6511bcb17549"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;