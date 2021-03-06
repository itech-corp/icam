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
  Badge,
} from "reactstrap";
import ModalPerso from "../../Modals/Modal";
import ModalCni from "../../Modals/Modal_cni";

//import usersData from "./UsersData";
import { FirebaseContext } from "../../../components/Firebase";
import DataTable from "../../Tables/DataTable/DataTable";
import { Link } from "react-router-dom";
const getBadge = (status) => {
  return status === "Admis"
    ? "success"
    : status === "Nouveau"
    ? "secondary"
    : status === "En cours"
    ? "warning"
    : status === "Recaler"
    ? "danger"
    : "primary";
};

const User = (props) => {
  const firebase = useContext(FirebaseContext);
  const { id } = props.match.params;
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

    status: "En cours de traitement ",
  };

  const [user, setUser] = useState(data); //usersData.find((user) => user.id.toString() === id);
  const [userState, setUserState] = useState("");
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

  const userLink = `/submit/${props.match.params.id}`;

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
    let thisUser = firebase
      .getCurrentUserState(props.match.params.id)
      .then((snapshot) => {
        setUserState(snapshot.val());
        console.log(snapshot.val());
      });
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

  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1"></i>Mes Informations
              </strong>
              <Col className="mb-4" xs={12}>
                <h3>
                  {" "}
                  Etat de ma Demande:{" "}
                  <Badge color={getBadge(userState)}>{userState}</Badge>
                </h3>
              </Col>
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
                <i className="icon-info pr-1"></i>Mes Documents
              </strong>
            </CardHeader>
            <CardBody>
              <Row>
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
              <Col className="text-center mb-4">
                <Link to={userLink}>
                  <Button
                    disabled={confirmBtn1 ? true : false}
                    className=" w-25 mr-4"
                    color="primary"
                  >
                    Modifier ma demande
                  </Button>
                </Link>
              </Col>
              <Col xs={12} className="text-center mb-3"></Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default User;
