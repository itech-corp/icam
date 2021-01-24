// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { init } from "emailjs-com";
init("user_fSMMBYI9bN2LoYh9qz3G6");
/*import * as admin from "firebase-admin";
const nodemailer = require("nodemailer");

admin.initializeApp();
var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9b1b96219098d4",
    pass: "e39611dff11ebc",
  },
});
var mailOptions = {
  from: "ibrahimmahamatmoussa@gmail.com",
  to: "corporationitech@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});*/
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
