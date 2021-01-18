import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCnh5YGoQu76N-HjTs4Pkq-_hoFUSFmIBE",
  authDomain: "student-manage-338a0.firebaseapp.com",
  databaseURL: "https://student-manage-338a0-default-rtdb.firebaseio.com",
  projectId: "student-manage-338a0",
  storageBucket: "student-manage-338a0.appspot.com",
  messagingSenderId: "500169743256",
  appId: "1:500169743256:web:25b0034db580c289a3e9ed",
  measurementId: "G-J9R571E9Q4",
};
const data = {
  name: "",
  fName: "",
  address: "",
  ville: "",
  tel: null,
  email: "",
  nation: "",
  lNaissance: "",
  dNaissance: "",
  sexe: "",
  diplomeEtat: {
    diplome: true,
    annee: "",
    option: "",
    pourcentage: "",
    etablissement: "",
    ville: "",
    pays: "",
  },
  parcours: [
    {
      date: "",
      classe: "",
      section: "",
      etablissement: "",
      ville: "",
      pays: "",
    },
  ],
  parcousComment: "",
  activiteExtra: "",
  infoFamille: {
    FnamePere: "",
    FnameMere: "",
    proffesionPere: "",
    telPere: null,
    proffesionMere: "Secretaire a la BEAC",
    telMere: null,
    address: "",
    nombreFrere: null,
    nombreSoeur: null,
    rangFamille: "",
  },
  vueIcam: "",
  debauche: "",
  autreInfo: "",

  status: "",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.database = app.database();
    this.storage = app.storage();
  }

  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signoutUser = () => this.auth.signOut();

  //writeUserData
  writeUserData = (userID, data) => {
    this.database.ref("users/" + userID).set(data);
  };

  writeSubmissionData = (userID, data) => {
    this.database.ref("userSubmission/" + userID).set(data);
    this.database.ref(`users/${userID}/status`).set("En cours");
  };

  //uploader
  uploadFile = (userID, file, fileName) =>
    this.storage.ref(`/images/${userID}/${fileName}.png`).put(file);

  //fetchCurrentUser
  getCurrentUser = () => this.auth.currentUser;

  getAllUsers = () => this.database.ref("users/").once("value");

  getUserSubmition = (id) =>
    this.database.ref(`userSubmission/${id}`).once("value");

  getUserFiles = (id, fileName) =>
    this.storage.ref(`images/${id}`).child(fileName).getDownloadURL();

  changeUserState = (userID, status) =>
    this.database.ref(`users/${userID}/status`).set(status);
  getCurrentUserState = (userID) =>
    this.database.ref(`users/${userID}/status`).once("value");
}

export default Firebase;
