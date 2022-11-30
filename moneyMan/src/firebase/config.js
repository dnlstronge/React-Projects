import firebase  from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBR-cCBZg6MCgXyg1o2tTdTgBgAUIsIpQk",
    authDomain: "moneyman-99322.firebaseapp.com",
    projectId: "moneyman-99322",
    storageBucket: "moneyman-99322.appspot.com",
    messagingSenderId: "88932004255",
    appId: "1:88932004255:web:ebb8988b8761c610aecdaa"
  };

  // initialise FB

  firebase.initializeApp(firebaseConfig)

  // initialize services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }