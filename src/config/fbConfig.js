import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAh25NCKvroWTHeMAej2sbgvckiTfKwcqM",
    authDomain: "post-app-2b894.firebaseapp.com",
    databaseURL: "https://post-app-2b894.firebaseio.com",
    projectId: "post-app-2b894",
    storageBucket: "post-app-2b894.appspot.com",
    messagingSenderId: "943509568691"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;