import React, { Component, useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Table,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";
import ModalPerso from "../Modals/Modal";
import ModalCni from "../Modals/Modal_cni";
import emailjs from "emailjs-com";
import usersData from "./UsersData";
import { FirebaseContext } from "../../components/Firebase";
import DataTable from "../Tables/DataTable/DataTable";

const User = (props) => {
  const firebase = useContext(FirebaseContext);
  const { id } = props.match.params;
  const data = {
    name: "issa",
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
      diplome: " ",
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
      proffesionMere: "",
      telMere: null,
      address: "",
      nombreFrere: null,
      nombreSoeur: null,
      rangFamille: "",
    },
    vueIcam: "",
    debauche: "",
    autreInfo: "",

    status: "En cours de traitement",
  };

  const [user, setUser] = useState(data); //usersData.find((user) => user.id.toString() === id);
  //Loader
  const [btn1Loading, setBtn1Loading] = useState(false);
  const [btn2Loading, setBtn2Loading] = useState(false);
  const [btn3Loading, setBtn3Loading] = useState(false);
  const [btn4Loading, setBtn4Loading] = useState(false);
  //Confirmation
  const [confirmBtn1, setConfirmBtn1] = useState(false);
  const [confirmBtn2, setConfirmBtn2] = useState(false);
  const [confirmBtn3, setConfirmBtn3] = useState(false);
  const [confirmBtn4, setConfirmBtn4] = useState(false);

  const [recu, setRecu] = useState("https://via.placeholder.com/400x300");
  const [passport, setPassport] = useState(
    "https://via.placeholder.com/400x300"
  );
  const [bulletin, setBulletin] = useState(
    "https://via.placeholder.com/400x300"
  );
  const [lettreM, setLettreM] = useState("https://via.placeholder.com/400x300");
  const [lettreR, setLettreR] = useState("https://via.placeholder.com/400x300");
  const [photo, setPhoto] = useState("https://via.placeholder.com/400x300");
  const [cni, setCni] = useState("https://via.placeholder.com/400x300");
  const [cv, setCv] = useState("https://via.placeholder.com/400x300");
  const LoadUserData = () => {
    firebase.getUserSubmition(props.match.params.id).then((snapshot) => {
      console.log(id);
      console.log(snapshot.val());
      console.log(data.name);
      let fetchedData = snapshot.val();
      setUser({ ...fetchedData });
    });
  };
  const LoadUserFile = () => {
    firebase.getUserFiles(id, "recu.png").then((url) => {
      setRecu(url);
      console.log(recu);
    });
    firebase.getUserFiles(id, "passeport.png").then((url) => setPassport(url));
    firebase.getUserFiles(id, "bulletin.png").then((url) => setBulletin(url));
    firebase.getUserFiles(id, "lettreM.png").then((url) => setLettreM(url));
    firebase.getUserFiles(id, "lettreR.png").then((url) => setLettreR(url));
    firebase.getUserFiles(id, "cni.png").then((url) => setCni(url));
    firebase.getUserFiles(id, "cv.png").then((url) => setCv(url));
  };

  useEffect(() => {
    LoadUserData();
    LoadUserFile();
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_qtmfbc8", "template_3k51mf8", e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <i className="text-muted icon-ban"></i> Not found
          </span>,
        ],
      ];
  const changeUserState = (loadSetter, btnSetter, status) => {
    loadSetter(true);
    firebase.changeUserState(id, status).then(() => {
      btnSetter(true);
      loadSetter(false);
    });
  };
  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1"></i>Details de l'etudiant
              </strong>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover>
                <tbody>
                  <strong>IDENTITÉ</strong>
                  <br />
                  <br />
                  <tr>
                    <td>Nom(s):</td>
                    <td>
                      <strong>{user.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Prenom(s):</td>
                    <td>
                      <strong>{user.fName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Addresse:</td>
                    <td>
                      <strong>{user.address}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Ville:</td>
                    <td>
                      <strong>{user.ville}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Téléphones:</td>
                    <td>
                      <strong>{user.tel}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <strong>{user.email}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Nationalité:</td>
                    <td>
                      <strong>{user.nation}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Lieu de naissance:</td>
                    <td>
                      <strong>{user.lNaissance}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Date De Naissance:</td>
                    <td>
                      <strong>{user.dNaissance}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sexe:</td>
                    <td>
                      <strong>{user.sexe}</strong>
                    </td>
                  </tr>
                  <br />
                  <br />
                  <strong>DIPLÔME D’ÉTAT</strong>
                  <br />
                  <br />
                  <tr>
                    <td>Titulaire d’un diplôme d’état ?:</td>
                    <td>
                      <strong>{user.diplomeEtat.diplome}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Annee:</td>
                    <td>
                      <strong>{user.diplomeEtat.annee}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Option:</td>
                    <td>
                      <strong>{user.diplomeEtat.option}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Pourcentage:</td>
                    <td>
                      <strong>{user.diplomeEtat.pourcentage}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Etablissement:</td>
                    <td>
                      <strong>{user.diplomeEtat.etablissement}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Ville:</td>
                    <td>
                      <strong>{user.diplomeEtat.ville}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Pays:</td>
                    <td>
                      <strong>{user.diplomeEtat.pays}</strong>
                    </td>
                  </tr>
                  <br />
                  <br />
                  <strong>PARCOURS D'ETUDES</strong>
                  <br />
                  <br />
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th>Annee</th>
                      <th>Classe</th>
                      <th>section</th>
                      <th>Etablissement</th>
                      <th>Ville</th>
                      <th>Pays</th>
                    </tr>
                    <tr>
                      <td>{user.parcours.date}</td>
                      <td>{user.parcours.classe}</td>
                      <td>{user.parcours.section}</td>
                      <td>{user.parcours.etablissement}</td>
                      <td>{user.parcours.ville}</td>
                      <td>{user.parcours.pays}</td>
                    </tr>
                  </table>
                  );
                  <br />
                  <br />
                  <strong>SITUATION FAMILLIALE</strong>
                  <br />
                  <br />
                  <tr>
                    <td>Noms complet du Père:</td>
                    <td>
                      <strong>{user.infoFamille.FnamePere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Proffesions du Père:</td>
                    <td>
                      <strong>{user.infoFamille.proffesionPere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Téléphones du Père:</td>
                    <td>
                      <strong>{user.infoFamille.telPere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Noms complet de la Mère:</td>
                    <td>
                      <strong>{user.infoFamille.FnameMere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Proffesions de la Mère:</td>
                    <td>
                      <strong>{user.infoFamille.proffesionMere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Téléphones de la Mère:</td>
                    <td>
                      <strong>{user.infoFamille.telMere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Addresse des parents:</td>
                    <td>
                      <strong>{user.infoFamille.address}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Nombre de freres:</td>
                    <td>
                      <strong>{user.infoFamille.nombreFrere}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Nombre de soeurs:</td>
                    <td>
                      <strong>{user.infoFamille.nombreSoeur}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Rang dans la famille:</td>
                    <td>
                      <strong>{user.infoFamille.rangFamille}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Decouverte d'ICAM par:</td>
                    <td>
                      <strong>{user.vueIcam}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Secteur d'activites choisie:</td>
                    <td>
                      <strong>{user.debauche}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1"></i>Documents de l'etudiant
              </strong>
            </CardHeader>
            <CardBody>
              <Row>
                {" "}
                <Col xs={4}>
                  <Card>
                    <CardImg top width="100%" src={recu} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Recu de paiment</CardTitle>

                      <Button size="sm" color="warning">
                        Telecharger
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardImg top width="100%" src={cni} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Carte d'identite</CardTitle>

                      <ModalCni buttonLabel="Voir plus" />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={passport}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Photos</CardTitle>

                      <Button size="sm" color="warning">
                        Telecharger
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={bulletin}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Bulletins</CardTitle>

                      <ModalPerso buttonLabel="Voir plus" className="primary" />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={lettreM}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Lettre de Motivation</CardTitle>

                      <Button size="sm" color="warning">
                        Telecharger
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardImg top width="100%" src={cv} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">curriculum vitae</CardTitle>

                      <Button size="sm" color="warning">
                        Telecharger
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
            <Row>
              <Col xs={12} className="text-center d-flex  w-100 mb-4">
                <form style={{ flex: 1 }} onSubmit={sendEmail}>
                  <input
                    style={{ display: "hidden" }}
                    type="hidden"
                    name="from_name"
                    value="Inscription approuvee"
                  />
                  <input
                    hidden
                    value={user.name}
                    type="text"
                    name="user_name"
                  />
                  <input
                    hidden
                    type="email"
                    value={user.email}
                    name="user_email"
                  />
                  <textarea
                    hidden
                    value="Vous avez bien ete inscrit"
                    name="message"
                  />
                  <Button
                    className=""
                    type="submit"
                    onClick={() =>
                      changeUserState(setBtn1Loading, setConfirmBtn1, "Inscrit")
                    }
                    disabled={confirmBtn1 ? true : false}
                    className=""
                    color="primary w-75"
                  >
                    {btn1Loading ? <Spinner /> : "Confirmer l'inscription"}
                  </Button>
                </form>
                <form
                  style={{ flex: 1 }}
                  className="contact-form"
                  onSubmit={sendEmail}
                >
                  <input
                    type="hidden"
                    name="from_name"
                    value="Admission Approuvee"
                  />
                  <input
                    hidden
                    value={user.name}
                    type="text"
                    name="user_name"
                  />

                  <input
                    hidden
                    type="email"
                    value={user.email}
                    name="user_email"
                  />

                  <textarea
                    hidden
                    value="Bonne nouvelle vous etes admis"
                    name="message"
                  />
                  <Button
                    type="submit"
                    onClick={() =>
                      changeUserState(setBtn2Loading, setConfirmBtn2, "Admis")
                    }
                    disabled={confirmBtn2 ? true : false}
                    className=""
                    color="success w-75"
                  >
                    {btn2Loading ? <Spinner /> : "Confirmer l'admission"}
                  </Button>
                </form>
              </Col>
              <Col xs={12} className="text-center d-flex mb-3">
                <form
                  style={{ flex: 1 }}
                  className="contact-form"
                  onSubmit={sendEmail}
                >
                  <input type="hidden" name="contact_number" />

                  <input
                    hidden
                    value={user.name}
                    type="text"
                    name="user_name"
                  />

                  <input
                    hidden
                    type="email"
                    value={user.email}
                    name="user_email"
                  />

                  <textarea
                    hidden
                    value="Desoler votre candidature a ete refuser"
                    name="message"
                  />
                  <Button
                    type="submit"
                    onClick={() =>
                      changeUserState(setBtn3Loading, setConfirmBtn3, "Recale")
                    }
                    disabled={confirmBtn3 ? true : false}
                    color="danger w-75"
                  >
                    {btn3Loading ? <Spinner /> : "Recaler"}
                  </Button>
                </form>
                <form
                  style={{ flex: 1 }}
                  className="contact-form"
                  onSubmit={sendEmail}
                >
                  <input type="hidden" name="contact_number" />

                  <input
                    hidden
                    value={user.name}
                    type="text"
                    name="user_name"
                  />

                  <input
                    hidden
                    type="email"
                    value={user.email}
                    name="user_email"
                  />

                  <textarea
                    hidden
                    value="Vous avez ete mise sur la liste d'attente"
                    name="message"
                  />

                  <Button
                    type="submit"
                    onClick={() =>
                      changeUserState(
                        setBtn4Loading,
                        setConfirmBtn4,
                        "Sur la liste d'attente"
                      )
                    }
                    disabled={confirmBtn4 ? true : false}
                    color="warning w-75"
                  >
                    {btn4Loading ? (
                      <Spinner />
                    ) : (
                      "Mettre sur la liste d'attente"
                    )}
                  </Button>
                </form>
                s
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default User;
