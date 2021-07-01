import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDj4e3W2cQHHnaT1GkZVhuGgrNivJGG4TM",
    authDomain: "instagram-clone-f7dbd.firebaseapp.com",
    projectId: "instagram-clone-f7dbd",
    storageBucket: "instagram-clone-f7dbd.appspot.com",
    messagingSenderId: "778641129113",
    appId: "1:778641129113:web:6d7018aeaa083fbb694208",
    measurementId: "G-NEDF7ZMGB7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db , auth , storage };


    
  


