import * as firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyDKH5j-9lwA-aJmBhdW9l557Yh8UbNXhvg",
    authDomain: "domotica-sensehat.firebaseapp.com",
    databaseURL: "https://domotica-sensehat.firebaseio.com",
    projectId: "domotica-sensehat",
    storageBucket: "domotica-sensehat.appspot.com",
    messagingSenderId: "278136714627",
    appId: "1:278136714627:web:ec173eb99c11a91cdb32b6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db