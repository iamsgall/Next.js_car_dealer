import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyOkXW8GDaNIWNocGmdrrd75HnzqYjq8w',
  authDomain: 'car-dealer-9572b.firebaseapp.com',
  projectId: 'car-dealer-9572b',
  storageBucket: 'car-dealer-9572b.appspot.com',
  messagingSenderId: '378755730703',
  appId: '1:378755730703:web:3ac985845e609a3e84c27a',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack);
  }
}
export const auth = firebase.auth();
export const db = firebase.firestore();

// export default auth;
