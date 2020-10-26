import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDGK8B1hC6Cy2hSv-mULMo0ZX_WyyeUTC8",
    authDomain: "todo-app-217e3.firebaseapp.com",
    databaseURL: "https://todo-app-217e3.firebaseio.com",
    projectId: "todo-app-217e3",
    storageBucket: "todo-app-217e3.appspot.com",
    messagingSenderId: "751175239863",
    appId: "1:751175239863:web:290f94119f7e051f7d2532"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child(`users`);