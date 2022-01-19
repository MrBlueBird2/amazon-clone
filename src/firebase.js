import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-NffZEodLgwg3Y0qA8_NOxMDWvODfvx4",
    authDomain: "clone-52f9c.firebaseapp.com",
    projectId: "clone-52f9c",
    storageBucket: "clone-52f9c.appspot.com",
    messagingSenderId: "1024437883498",
    appId: "1:1024437883498:web:ef5498c1b620cb5828f013",
    measurementId: "G-VFLKY0KY0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };