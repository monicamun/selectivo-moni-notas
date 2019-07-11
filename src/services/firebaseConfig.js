import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdAnYtK6pDEse-004HB-ouYFw7KJI8kcA",
    authDomain: "moni-notes.firebaseapp.com",
    databaseURL: "https://moni-notes.firebaseio.com",
    projectId: "moni-notes",
    storageBucket: "",
    messagingSenderId: "943548140369",
    appId: "1:943548140369:web:a0c467724304ac34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;