import firebase from 'firebase/app';
// The DB
import 'firebase/firestore';
// the authentification
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD2LxlYTrrvvJ4N0mFyKTYDlJ6C4rz4dcM",
  authDomain: "crwn-db-b3b15.firebaseapp.com",
  databaseURL: "https://crwn-db-b3b15.firebaseio.com",
  projectId: "crwn-db-b3b15",
  storageBucket: "crwn-db-b3b15.appspot.com",
  messagingSenderId: "1080654943189",
  appId: "1:1080654943189:web:685e6cbd14999eead4a35c",
  measurementId: "G-V7DV67XVWM"
};
// userAuth is the object passed when we successfully log in using google and is stored in our DB
// Adds a user to the firebase DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If userAuth does not exist, return out
  if (!userAuth) return;
  // If userAuth is true, make a query to the firestore using the userAuth.uid and set to userREf
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Using the userRef.get(), we will access the snapshot with user data properties
  const snapShot = await userRef.get();
  // If snapShot does not exist, destructure userAuth and get displayName, email and date then set userREf to these
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  // Returns userRef from firebase DB so we can store in local state
  return userRef;
}

firebase.initializeApp(config);

// Help us get access to google auth process
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Gives us acces to GoogleAuthProvider from auth library
const provider = new firebase.auth.GoogleAuthProvider();
//This allows us to use the popup that comes up to allow us to select our google account
provider.setCustomParameters({ prompt: 'select_account' });
// signInWithPopup can take many params, including google, twitter etc.. We want google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;