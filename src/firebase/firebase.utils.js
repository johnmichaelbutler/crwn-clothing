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