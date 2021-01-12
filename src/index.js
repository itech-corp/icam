// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: "AIzaSyCnh5YGoQu76N-HjTs4Pkq-_hoFUSFmIBE",
  authDomain: "student-manage-338a0.firebaseapp.com",
  databaseURL: "https://student-manage-338a0-default-rtdb.firebaseio.com",
  projectId: "student-manage-338a0",
  storageBucket: "student-manage-338a0.appspot.com",
  messagingSenderId: "500169743256",
  appId: "1:500169743256:web:25b0034db580c289a3e9ed",
  measurementId: "G-J9R571E9Q4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
