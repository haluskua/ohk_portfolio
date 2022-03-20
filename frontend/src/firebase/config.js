// import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

// import { initializeApp } from "firebase/app";

// import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3TQhU0M9xB_0JlbcRDvvdQ1up5KbYpVg",
  authDomain: "image-gallery-2178c.firebaseapp.com",
  projectId: "image-gallery-2178c",
  storageBucket: "image-gallery-2178c.appspot.com",
  messagingSenderId: "812002262095",
  appId: "1:812002262095:web:ca3a61fb378dd8883e3e3a",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
//initialize

export { projectStorage, projectFirestore, timeStamp };
