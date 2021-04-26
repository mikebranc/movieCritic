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


firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider).then(()=>{window.location.href = '/about'});
// };

export const signUpWithGoogle = async () => {
  const {user} = auth.signInWithPopup(provider).then( async (result) => {
    let user = result.user;
    let username = result.user.displayName;
    let email = result.user.email;
    const userRef = firestore.doc(`users/${user.uid}`);
    if(result.additionalUserInfo.isNewUser){
      const data = await userRef.set({email, username});
    }
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  }).then(()=>{window.location.href = '/about'});
};


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, username } = user;
    try {
      await userRef.set({
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;