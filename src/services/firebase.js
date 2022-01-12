import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyDsrpf7OotXTl-7tWOShjndYUVIYiOiLG4",
    authDomain: "chatty-sofkau.firebaseapp.com",
    projectId: "chatty-sofkau",
    storageBucket: "chatty-sofkau.appspot.com",
    messagingSenderId: "762559071866",
    appId: "1:762559071866:web:c2cb9fce7d93a308659dc3",
    measurementId: "G-QNJW64J9YJ"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
