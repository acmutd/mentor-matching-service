import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyD-pe9M4226Ai85ELkBejEVIVqqhRIvKqk",
    authDomain: "fir-form-c0dbc.firebaseapp.com",
    projectId: "fir-form-c0dbc",
    storageBucket: "fir-form-c0dbc.appspot.com",
    messagingSenderId: "447753363504",
    appId: "1:447753363504:web:c153ed4827457135c00df5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export { db };