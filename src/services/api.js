import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import firebaseConfig from "./firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default {
  fbLogin: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    let result = await firebaseApp.auth().signInWithPopup(provider);

    return result;
  },

  addUser: async (user) => {
    await db.collection("users").doc(user.id).set(
      {
        name: user.name,
        avatar: user.avatar,
      },
      { merge: true }
    );
  },
};
