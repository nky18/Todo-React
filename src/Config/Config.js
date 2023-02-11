import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFe8AjIDf4NNlaQAzZtfnSPIhPdnjgjjY",
  authDomain: "todo-5597b.firebaseapp.com",
  projectId: "todo-5597b",
  storageBucket: "todo-5597b.appspot.com",
  messagingSenderId: "1013519008618",
  appId: "1:1013519008618:web:e8dffa16c63e197e1a1b13",
  measurementId: "G-PP4B51G7ML"
};

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 



