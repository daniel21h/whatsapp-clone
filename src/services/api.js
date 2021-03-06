import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import firebaseConfig from "../../firebase/firebase.config";

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

  getContactList: async (userId) => {
    let list = [];

    let results = await db.collection("users").get();
    results.forEach((result) => {
      let data = result.data();

      if (result.id !== userId) {
        list.push({
          id: result.id,
          name: data.name,
          avatar: data.avatar,
        });
      }
    });

    return list;
  },

  addNewChat: async (user, userplus) => {
    let newChat = await db.collection("chats").add({
      messages: [],
      users: [user.id, userplus.id],
    });

    // User
    db.collection("users")
      .doc(user.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: userplus.name,
          image: userplus.avatar,
          with: userplus.id,
        }),
      });

    // Userplus
    db.collection("users")
      .doc(userplus.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user.name,
          image: user.avatar,
          with: user.id,
        }),
      });
  },

  onChatList: (userId, setChatlist) => {
    return db
      .collection("users")
      .doc(userId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();

          if (data.chats) {
            setChatlist(data.chats);
          }
        }
      });
  },
};
