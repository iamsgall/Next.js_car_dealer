// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// export const firebaseConfig = {
// apiKey: 'AIzaSyDtTIvukdgFY8efe9V2z9WWbGNd1XDDcpg',
// authDomain: 'virgonaturalcreations-838a6.firebaseapp.com',
// projectId: 'virgonaturalcreations-838a6',
// storageBucket: 'virgonaturalcreations-838a6.appspot.com',
// messagingSenderId: '869000372604',
// appId: '1:869000372604:web:ce92bd25df21036b2c84f9',
// }

// const app = initializeApp(firebaseConfig)

// export const auth = getAuth(app)
// export const db = getFirestore(app)

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export const firebaseConfig = {
  apiKey: 'AIzaSyBqSbmH2bKbgJJ4JZDvsfil_jpMzH_UMzA',
  apiKey: 'AIzaSyDtTIvukdgFY8efe9V2z9WWbGNd1XDDcpg',
  authDomain: 'virgonaturalcreations-838a6.firebaseapp.com',
  projectId: 'virgonaturalcreations-838a6',
  storageBucket: 'virgonaturalcreations-838a6.appspot.com',
  messagingSenderId: '869000372604',
  appId: '1:869000372604:web:ce92bd25df21036b2c84f9',
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
