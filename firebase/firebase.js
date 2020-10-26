import firebase from 'firebase'
// import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA0SOKfMyVXVAdA0q2AZ7kS2YZ76lEpecs",
    authDomain: "contact-manager-6a720.firebaseapp.com",
    databaseURL: "https://contact-manager-6a720.firebaseio.com",
    projectId: "contact-manager-6a720",
    storageBucket: "contact-manager-6a720.appspot.com",
    messagingSenderId: "441388076862",
    appId: "1:441388076862:web:6ac1d8c76b19f237e8e66f"
  };
 firebase.initializeApp(firebaseConfig);
 export default firebase