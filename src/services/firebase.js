import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyB3n7Y9uk50YTtfPaJmryRWwKFgUMCWHf8",
    authDomain: "fir-project-5d9f4.firebaseapp.com",
    databaseURL: "https://fir-project-5d9f4.firebaseio.com",
    projectId: "fir-project-5d9f4",
    storageBucket: "fir-project-5d9f4.appspot.com",
    messagingSenderId: "704367083713"
});

export const app = firebase;

export const firestore = app.firestore();

export const notesCollection = firestore.collection('notes');
