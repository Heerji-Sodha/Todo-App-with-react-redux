import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB9S9VpXsEujRU2To89Lz1I3fLvz1kJP18",
    authDomain: "todoapp-16dd8.firebaseapp.com",
    databaseURL: "https://todoapp-16dd8.firebaseio.com",
    projectId: "todoapp-16dd8",
    storageBucket: "todoapp-16dd8.appspot.com",
    messagingSenderId: "89998374293",
    appId: "1:89998374293:web:f3e7d48e5bbf2a09cf329c"
  };

  export default firebase.initializeApp(firebaseConfig);