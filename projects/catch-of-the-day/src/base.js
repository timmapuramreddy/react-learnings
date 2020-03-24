import Rebase from "re-base";
import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6heJ_W4E6mhwN_xeeyoeqptakktLlZ9M",
    authDomain: "catch-of-the-day-mohan-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mohan-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is named export
export { firebaseApp };

//this is a default export

export default base;

