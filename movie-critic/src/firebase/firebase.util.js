import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD6qsgQajHMkwS9ZgLrrvjBchc4ReDCpKM",
  authDomain: "brady-9a097.firebaseapp.com",
  projectId: "brady-9a097",
  storageBucket: "brady-9a097.appspot.com",
  messagingSenderId: "80307267436",
  appId: "1:80307267436:web:6d5687491c6511bcb17549"
};
const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    window.firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
})

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;