import firebase from 'firebase';  // npm install firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0btaRUBx41Kmkqmr8nno9l5j20p1gq_0",
    authDomain: "facebook-clone-def24.firebaseapp.com",
    databaseURL: "https://facebook-clone-def24.firebaseio.com",
    projectId: "facebook-clone-def24",
    storageBucket: "facebook-clone-def24.appspot.com",
    messagingSenderId: "980979999459",
    appId: "1:980979999459:web:6d626f4f9c295e05c35bd6",
    measurementId: "G-2KQFNCNX7Q"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig); // to connect react front end to firebase backend. 
const db = firebaseApp.firestore();
const auth = firebase.auth();                               // for loggin in 
const provider = new firebase.auth.GoogleAuthProvider();    // for google login service

export { auth, provider };
export default db;