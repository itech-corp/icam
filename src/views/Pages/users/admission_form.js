import React, { useState, useContext, useEffect } from "react";
import icam_logo from "../../../assets/img/icam.png";
import { FirebaseContext } from "../../../components/Firebase";
import ModalAdmission from "../../../views/Modals/Modal_admission";
import { AppHeader, AppNavbarBrand, AppFooter } from "@coreui/react";
import logo from "../../../assets/img/brand/logo.svg";
import sygnet from "../../../assets/img/brand/sygnet.svg";
import ParcourInput from "./dynaInput";
import { withRouter } from "react-router";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import Container from "reactstrap/lib/Container";
import { Link } from "react-router-dom";

const DefaultFooter = React.lazy(() =>
  import("../../../containers/DefaultLayout/DefaultFooter")
);
const Admission = (props) => {
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

    status: "",
  };
  const InputData = [
    <FormGroup row>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="date"
          id="date"
          name="date-input"
          placeholder="date"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="classe"
          name="text-input"
          placeholder="Classe"
        />
      </Col>

      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="section"
          name="text-input"
          placeholder="Section"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="etablissement"
          name="text-input"
          placeholder="Établissement"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="ville"
          name="text-input"
          placeholder="Ville"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="pays"
          name="text-input"
          placeholder="Pays"
        />
      </Col>
    </FormGroup>,
    <FormGroup row>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="date"
          id="date"
          name="date-input"
          placeholder="date"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="classe"
          name="text-input"
          placeholder="Classe"
        />
      </Col>

      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="section"
          name="text-input"
          placeholder="Section"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="etablissement"
          name="text-input"
          placeholder="Établissement"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="ville"
          name="text-input"
          placeholder="Ville"
        />
      </Col>
      <Col>
        <Input
          onChange={handleParcourChange}
          type="text"
          id="pays"
          name="text-input"
          placeholder="Pays"
        />
      </Col>
    </FormGroup>,
  ];

  const [admissionData, setadmissionData] = useState(data);
  const [file, setFile] = useState("");
  const [user, setUser] = useState(data);
  const [parcoursInput, setParcoursInput] = useState(InputData);
  const [userState, setUserState] = useState("Nouveau");
  const [url, setURL] = useState("");
  const signOut = (e) => {
    console.log("logingOUt");
    firebase.signoutUser().then(() => {
      props.history.push("/login");
    });
  };
  const LoadUserData = () => {
    firebase.getUserSubmition(props.match.params.id).then((snapshot) => {
      // console.log(id);
      console.log(snapshot.val());
      console.log(data.name);
      let fetchedData = snapshot.val();
      setUser({ ...fetchedData });
    });
  };

  useEffect(() => {
    if (props.match.params.id) {
      LoadUserData();
    }
  }, [parcoursInput]);

  const handleAddInput = () => {};

  const firebase = useContext(FirebaseContext);
  const handleChange = (e) => {
    setadmissionData({ ...admissionData, [e.target.id]: e.target.value });
    console.log(admissionData);
  };
  const handleEtatChange = (e) => {
    setadmissionData({
      ...admissionData,
      diplomeEtat: {
        ...admissionData.diplomeEtat,
        [e.target.id]: e.target.value,
      },
    });
    console.log(admissionData);
  };
  const handleFamilleChange = (e) => {
    setadmissionData({
      ...admissionData,
      infoFamille: {
        ...admissionData.infoFamille,
        [e.target.id]: e.target.value,
      },
    });
    console.log(admissionData);
  };
  const handleParcourChange = (e) => {
    setadmissionData({
      ...admissionData,
      parcours: { ...admissionData.parcours, [e.target.id]: e.target.value },
    });
    console.log(admissionData);
  };

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    let fileName = e.target.name;
    handleUpload(file, fileName);
    setURL("cretin");
    console.log(url);
  };

  const handleUpload = (file, fileName) => {
    const user = firebase.getCurrentUser();
    if (user) {
      let userID = user.uid;
      console.log(userID);
      firebase.uploadFile(userID, file, fileName);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = firebase.getCurrentUser();
    if (user) {
      firebase.writeSubmissionData(user.uid, admissionData);
    }
    props.history.push("/my_admission/");
  };

  return (
    <div className="app">
      <AppHeader fixed>
        <Row style={{ width: "100%", justifyContent: "flex-end" }}>
          <div>
            <AppNavbarBrand
              full={{ src: logo, width: 109, height: 45, alt: "ICAM Logo" }}
              minimized={{
                src: sygnet,
                width: 30,
                height: 30,
                alt: "ICAM Logo",
              }}
            />
          </div>

          <Button color="danger" onClick={signOut}>
            Deconnexion
          </Button>
        </Row>
      </AppHeader>
      <div className="app-body">
        <main className="main mt-4">
          {userState !== "Nouveau" ? (
            <Container>
              <Row>
                <Col className="text-center align-center mt-5">
                  <h1>Tu as deja soumis ta demande</h1>

                  <h2>
                    Consulte la 👉
                    <a href={props.histor.push("/my_admission/")}> ICI</a>
                  </h2>
                  <h1>🚶‍</h1>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container fluid>
              <Row style={{ alignContent: "center" }}>
                <Col xs={10} sm={8}>
                  <p className="text-center">
                    <Card>
                      <CardHeader style={{ backgroundColor: "#f7b100" }}>
                        <strong style={{ color: "white" }}>
                          <Link to="/profile">
                            <i className="fa fa-arrow-left float-left "></i>
                          </Link>
                          Formulaire de demande d'admission
                        </strong>
                      </CardHeader>

                      <CardBody>
                        {" "}
                        <img src={icam_logo} />
                        <Form
                          onSubmit={submitHandler}
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static text-left">
                                <strong>IDENTITÉ</strong>
                              </p>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Nom(s):</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                name="text-input"
                                placeholder={user.name}
                                onChange={handleChange}
                                required
                              />
                              <FormText color="muted">
                                Entrer Votre Nom tel que sur vos documents
                              </FormText>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Prenom(s):</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="fName"
                                name="text-input"
                                placeholder={user.fName}
                              />
                              <FormText color="muted">
                                Entrer Votre prenom tel que sur vos documents
                              </FormText>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Addresse:</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="address"
                                name="text-input"
                                placeholder={user.address}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Ville:</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="ville"
                                name="text-input"
                                placeholder={user.ville}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Téléphones:</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="tel"
                                name="text-input"
                                placeholder={user.tel}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="email-input">Email:</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email-input"
                                placeholder={user.email}
                                autoComplete="email"
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Nationalité:</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="nation"
                                name="text-input"
                                placeholder={user.nation}
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Lieu de naissance:
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="lNaissance"
                                name="text-input"
                                placeholder={user.lNaissance}
                              />
                            </Col>
                          </FormGroup>

                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="date-input">
                                Date De Naissance
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="date"
                                id="dNaissance"
                                name="date-input"
                                placeholder="date"
                                value={user.dNaissance}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label>Sexe:</Label>
                            </Col>
                            <Col md="9">
                              <FormGroup check inline>
                                <Input
                                  onChange={handleChange}
                                  className="form-check-input"
                                  type="radio"
                                  id="sexe"
                                  name="sexe"
                                  value="Masculin"
                                />
                                <Label
                                  className="form-check-label"
                                  check
                                  htmlFor="inline-radio1"
                                >
                                  Masculin
                                </Label>
                              </FormGroup>
                              <FormGroup check inline>
                                <Input
                                  onChange={handleChange}
                                  className="form-check-input"
                                  type="radio"
                                  id="sexe"
                                  name="sexe"
                                  value="Feminin"
                                />
                                <Label
                                  className="form-check-label"
                                  check
                                  htmlFor="inline-radio2"
                                >
                                  Feminin
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static text-left">
                                <strong>DIPLÔME D’ÉTAT</strong>
                              </p>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label>
                                Êtes-vous titulaire d’un diplôme d’état ?:
                              </Label>
                            </Col>
                            <Col md="9">
                              <FormGroup check inline>
                                <Input
                                  onChange={handleEtatChange}
                                  className="form-check-input"
                                  type="radio"
                                  id="diplome"
                                  name="diplome"
                                  value="oui"
                                />
                                <Label
                                  className="form-check-label"
                                  check
                                  htmlFor="inline-radio1"
                                >
                                  Oui
                                </Label>
                              </FormGroup>
                              <FormGroup check inline>
                                <Input
                                  onChange={handleEtatChange}
                                  className="form-check-input"
                                  type="radio"
                                  id="diplome"
                                  name="diplome"
                                  value="Non"
                                />
                                <Label
                                  className="form-check-label"
                                  check
                                  htmlFor="inline-radio2"
                                >
                                  Non
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static">Si oui:</p>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Annee:</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="text"
                                id="annee"
                                name="text-input"
                                placeholder="Annee"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Option:</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="text"
                                id="option"
                                name="text-input"
                                placeholder="Option"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Pourcentage</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="number"
                                min="0"
                                max="100"
                                id="pourcentage"
                                name="text-input"
                                placeholder="Pourcentage"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Etablissement:</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="text"
                                id="etablissement"
                                name="text-input"
                                placeholder="Etablissement"
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">Ville:</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="text"
                                id="ville"
                                name="text-input"
                                placeholder="Ville"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="selectSm">Pays:</Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleEtatChange}
                                type="select"
                                name="selectSm"
                                id="pays"
                                bsSize="sm"
                              >
                                <option value="0">Selectionner le Pays</option>
                                <option value="Congo">Congo</option>
                                <option value="RCA">RCA</option>
                                <option value="Cameroun">Cameroun</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Tchad">Tchad</option>
                              </Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static text-left">
                                <strong>PARCOURS D’ÉTUDES</strong>
                              </p>
                            </Col>
                          </FormGroup>
                          <ParcourInput />

                          <FormGroup row>
                            <Col md="4">
                              <Label htmlFor="text-input">
                                Commentaires éventuelles:
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="parcourComment"
                                name="text-input"
                                placeholder="..."
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="4">
                              <Label htmlFor="text-input">
                                Activités extra-scolaires :
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleChange}
                                type="text"
                                id="activiteExtra"
                                name="text-input"
                                placeholder="..."
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static text-left">
                                <strong>SITUATION FAMILLIALE</strong>
                              </p>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Noms,Prenoms du Père:
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="FnamePere"
                                name="text-input"
                                placeholder="Noms,prenoms"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Profession du Père :
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="proffesionPere"
                                name="text-input"
                                placeholder="Proffesions"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Téléphones du Père :
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="telPere"
                                name="text-input"
                                placeholder="Téléphones"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Noms, Prénom de la Mère :
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="FnameMere"
                                name="text-input"
                                placeholder="Noms,Prénom"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Proffesions de la Mère :
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="proffesionMere"
                                name="text-input"
                                placeholder="Proffesions"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Téléphones de la Mère:
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="telMere"
                                name="text-input"
                                placeholder="Téléphones"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="text-input">
                                Addresse des Parents:
                              </Label>
                            </Col>
                            <Col xs="8" md="6">
                              <Input
                                onChange={handleFamilleChange}
                                type="text"
                                id="address"
                                name="text-input"
                                placeholder="Addresse des Parents"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col>
                              <Input
                                onChange={handleFamilleChange}
                                type="Number"
                                id="nombreFrere"
                                name="text-input"
                                placeholder="Nombre des freres"
                              />
                            </Col>
                            <Col>
                              <Input
                                onChange={handleFamilleChange}
                                type="Number"
                                id="nombreSoeur"
                                name="text-input"
                                placeholder="Nombre des Soeurs"
                              />
                            </Col>

                            <Col>
                              <Input
                                onChange={handleFamilleChange}
                                type="Number"
                                id="rangFamille"
                                name="text-input"
                                placeholder="Rang dans la famille"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="10" md="8">
                              <p className="form-control-static text-left">
                                <strong>
                                  COMMENT AVEZ-VOUS CONNU LA FACULTÉ
                                  D’INGÉNIERIE ULC-ICAM ?
                                </strong>
                              </p>
                            </Col>
                            <Col xs={5}>
                              <Container className="text-left">
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vueIcam"
                                      name="inline-radios"
                                      value="Annonce televise"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio1"
                                    >
                                      Annonce télévisée
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Annonce à la radio"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Annonce à la radio
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Annonce dans les paroisses"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Annonce dans les paroisses
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Tracts"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Tracts
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Affiches"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Affiches
                                    </Label>
                                  </FormGroup>
                                </Col>
                              </Container>
                            </Col>
                            <Col xs={5}>
                              <Container className="text-left">
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Site internet"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio1"
                                    >
                                      Site internet
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Descentes dans les écoles"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Descentes dans les écoles
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="par un de vos proches"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      par un de vos proches
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="par des étudiants de la Fac"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      par des étudiants de la Fac
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="radio"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Autres"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="Autres"
                                    >
                                      Autres
                                    </Label>
                                    <Input
                                      onChange={handleChange}
                                      className="form-text-input ml-1 pt-0 pb-0"
                                      type="text"
                                      id="vuIcam"
                                      name="inline-radios"
                                      value="Preciser..."
                                    />
                                  </FormGroup>
                                </Col>
                              </Container>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="10" md="8">
                              <p className="form-control-static text-left">
                                <strong>
                                  Dans quel secteur d’activités
                                  souhaiteriez-vous travailler à la fin de vos
                                  études ?
                                </strong>
                              </p>
                            </Col>
                            <Col xs={5}>
                              <Container className="text-left">
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Energie"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio1"
                                    >
                                      Energie
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Maintenance"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Maintenance
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Mines-Métallurgie-Chimie industrielle"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Mines-Métallurgie-Chimie industrielle
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Mécanique"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Mécanique
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Informatique-réseaux-télécommunication"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Informatique-réseaux-télécommunication
                                    </Label>
                                  </FormGroup>
                                </Col>
                              </Container>
                            </Col>
                            <Col xs={5}>
                              <Container className="text-left">
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Électricité-Électronique"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio1"
                                    >
                                      Électricité-Électronique
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="oBâtiments et travaux publics"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Bâtiments et travaux publics
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Bureau d’études"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Bureau d’études
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline required>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Agro-Alimentaire"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Agro-Alimentaire
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup check inline>
                                    <Input
                                      onChange={handleChange}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Autres"
                                    />
                                    <Label
                                      className="form-check-label"
                                      check
                                      htmlFor="inline-radio2"
                                    >
                                      Autres
                                    </Label>
                                    <Input
                                      onChange={handleChange}
                                      className="form-text-input ml-1 pt-0 pb-0"
                                      type="text"
                                      id="debauche"
                                      name="inline-radios"
                                      value="Preciser..."
                                    />
                                  </FormGroup>
                                </Col>
                              </Container>
                            </Col>
                          </FormGroup>

                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="textarea-input">
                                Autres Information utiles:
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                onChange={handleChange}
                                type="textarea"
                                name="textarea-input"
                                id="autreInfo"
                                rows="9"
                                placeholder="..."
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8" md="6">
                              <p className="form-control-static text-left">
                                <strong>DOCUMENTS SCOLAIRES</strong>
                              </p>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Lettre de motivation
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                id="file-input"
                                name="lettreM"
                                onChange={handleFileChange}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Curriculum Vitae
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="cv"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Bulletins de notes
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="bulletin"
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Phote au Format passeport
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="passeport"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Une Carte d'identite
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="cni"
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                La lettre de Recommandation
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="lettreR"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="file-input">
                                Recu de paiment
                              </Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                id="file-input"
                                name="recu"
                              />
                            </Col>
                          </FormGroup>
                          <Button
                            className="mr-1"
                            type="submit"
                            size="sm"
                            color="warning"
                          >
                            <ModalAdmission buttonLabel="Soumettre" />
                          </Button>
                        </Form>
                      </CardBody>
                      <CardFooter></CardFooter>
                    </Card>
                  </p>
                </Col>
              </Row>
            </Container>
          )}
        </main>
      </div>
      <AppFooter className="bg-dark w-100">
        <DefaultFooter />
      </AppFooter>
    </div>
  );
};

export default Admission;
