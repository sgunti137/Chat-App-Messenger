// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBUPQc16KHFGfGGr9eNh2LAaYTg1m0aJ-Q",
    authDomain: "chat-app-397c2.firebaseapp.com",
    projectId: "chat-app-397c2",
    storageBucket: "chat-app-397c2.appspot.com",
    messagingSenderId: "993530536220",
    appId: "1:993530536220:web:1668361d67d9d5bd7c5ad9"
}).auth();