import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCrwhzjq0QAO35g5DKi9WuSwTC1tqd72zQ",
    authDomain: "e-commerce-app-7e633.firebaseapp.com",
    projectId: "e-commerce-app-7e633",
    storageBucket: "e-commerce-app-7e633.appspot.com",
    messagingSenderId: "364640783072",
    appId: "1:364640783072:web:588b88abf14b970228de85",
    measurementId: "G-0EXQJ656F9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
