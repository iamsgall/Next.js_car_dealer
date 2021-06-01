import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export const firebaseConfig = {
  apiKey: 'AIzaSyBqSbmH2bKbgJJ4JZDvsfil_jpMzH_UMzA',
  authDomain: 'cardealer-f17ff.firebaseapp.com',
  projectId: 'cardealer-f17ff',
  storageBucket: 'cardealer-f17ff.appspot.com',
  messagingSenderId: '817071927327',
  appId: '1:817071927327:web:87f83058af538a81c8a52a',
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack)
  }
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const store = firebase.storage()
