import Firebase from "firebase";
  // Web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBkOBA1UNSboIEq9ogFptp5zEjFCNJx5Fc",
    authDomain: "recycle-calculator.firebaseapp.com",
    databaseURL: "https://recycle-calculator-default-rtdb.firebaseio.com",
    projectId: "recycle-calculator",
    storageBucket: "recycle-calculator.appspot.com",
    messagingSenderId: "832627044749",
    appId: "1:832627044749:web:f7b76ab5d4dfa51a3e4dc4",
    measurementId: "G-1LSEDWKCQH"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = app.database();