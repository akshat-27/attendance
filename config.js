import firebase from "firebase";

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyAiT3Kx5aJgYaggyh8BqC7SBPpHJWolohA",
  authDomain: "attendance-d8ea4.firebaseapp.com",
  projectId: "attendance-d8ea4",
  storageBucket: "attendance-d8ea4.appspot.com",
  messagingSenderId: "907955005285",
  appId: "1:907955005285:web:4f97b042d4486a65f1a38c"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  