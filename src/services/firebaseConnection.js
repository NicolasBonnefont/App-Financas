import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyClPPMcavB8QXFjD4WrB6nh91ImMDcIaCA",
  authDomain: "app-sujeito.firebaseapp.com",
  databaseURL: "https://app-sujeito.firebaseio.com",
  projectId: "app-sujeito",
  storageBucket: "app-sujeito.appspot.com",
  messagingSenderId: "533349278346",
  appId: "1:533349278346:web:79c755b765bdfb2e4f0373",
  measurementId: "G-QVXP3CD83X"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase