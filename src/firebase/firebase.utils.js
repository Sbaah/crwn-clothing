import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyCxZOzdXaBoib7U94yFyAQy0PGjozIU68Q',
  authDomain: 'crwn-db-cde86.firebaseapp.com',
  projectId: 'crwn-db-cde86',
  storageBucket: 'crwn-db-cde86.appspot.com',
  messagingSenderId: '522003773345',
  appId: '1:522003773345:web:470c4ecf7de9e13ff8fde0',
  measurementId: 'G-SX5KN1G75Z',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
