import firebase, { firestore } from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebase.config'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
