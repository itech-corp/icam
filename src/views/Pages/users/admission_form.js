import React, { Component } from "react";
import icam_logo from "../../../assets/img/icam.png";
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
class Typography extends Component {
  render() {
    return (
      <Row>
        <Col xs={6}>
          <p className="text-center">
            <Card>
              <CardHeader style={{ backgroundColor: "#f7b100" }}>
                <strong style={{ color: "white" }}>
                  Formulaire de demande d'admission
                </strong>
              </CardHeader>

              <CardBody>
                {" "}
                <img src={icam_logo} />
                <Form
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Noms"
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Prenom(s)"
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Addresse"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ville:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Téléphones:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Telephone"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="email"
                        id="email-input"
                        name="email-input"
                        placeholder="Enter l'Email"
                        autoComplete="email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nationalité:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Addresse"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Lieu de naissance:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Lieu de naissance"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date De Naissance</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
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
                          className="form-check-input"
                          type="radio"
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
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
                          className="form-check-input"
                          type="radio"
                          id="inline-radio2"
                          name="inline-radios"
                          value="option2"
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
                      <Label>Êtes-vous titulaire d’un diplôme d’état ?:</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
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
                          className="form-check-input"
                          type="radio"
                          id="inline-radio2"
                          name="inline-radios"
                          value="option2"
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
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Etablissement"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ville:</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
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
                        type="select"
                        name="selectSm"
                        id="SelectLm"
                        bsSize="sm"
                      >
                        <option value="0">Selectionner le Pays</option>
                        <option value="1">Congo</option>
                        <option value="2">RCA</option>
                        <option value="3">Cameroun</option>
                        <option value="4">Gabon</option>
                        <option value="5">Tchad</option>
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
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Classe"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Section"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Établissement"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Ville"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Pays"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">
                        Commentaires éventuelles:
                      </Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
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
                      <Label htmlFor="text-input">Noms,Prenoms du Père:</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Noms,prenoms"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Profession du Père :</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Proffesions"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Téléphones du Père :</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Proffesions"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Téléphones de la Mère:</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Téléphones"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Addresse des Parents:</Label>
                    </Col>
                    <Col xs="8" md="6">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Addresse des Parents"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Input
                        type="Number"
                        id="text-input"
                        name="text-input"
                        placeholder="Nombre des freres"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="Number"
                        id="text-input"
                        name="text-input"
                        placeholder="Nombre des Soeurs"
                      />
                    </Col>

                    <Col>
                      <Input
                        type="Number"
                        id="text-input"
                        name="text-input"
                        placeholder="Rang dans la famille"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="10" md="8">
                      <p className="form-control-static text-left">
                        <strong>
                          COMMENT AVEZ-VOUS CONNU LA FACULTÉ D’INGÉNIERIE
                          ULC-ICAM ?
                        </strong>
                      </p>
                    </Col>
                    <Col xs={5}>
                      <Container className="text-left">
                        <Col>
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="radio"
                              id="inline-radio1"
                              name="inline-radios"
                              value="option1"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio1"
                              name="inline-radios"
                              value="option1"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="radio"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
                            />
                            <Label
                              className="form-check-label"
                              check
                              htmlFor="inline-radio2"
                            >
                              Autres
                            </Label>
                            <Input
                              className="form-text-input ml-1 pt-0 pb-0"
                              type="text"
                              id="inline-radio2"
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
                          Dans quel secteur d’activités souhaiteriez-vous
                          travailler à la fin de vos études ?
                        </strong>
                      </p>
                    </Col>
                    <Col xs={5}>
                      <Container className="text-left">
                        <Col>
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio1"
                              name="inline-radios"
                              value="option1"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio1"
                              name="inline-radios"
                              value="option1"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
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
                              className="form-check-input"
                              type="checkbox"
                              id="inline-radio2"
                              name="inline-radios"
                              value="option2"
                            />
                            <Label
                              className="form-check-label"
                              check
                              htmlFor="inline-radio2"
                            >
                              Autres
                            </Label>
                            <Input
                              className="form-text-input ml-1 pt-0 pb-0"
                              type="text"
                              id="inline-radio2"
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
                        type="textarea"
                        name="textarea-input"
                        id="textarea-input"
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
                      <Label htmlFor="file-input">Lettre de motivation</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Curriculum Vitae</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Bulletins de notes</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">
                        Phote au Format passeport
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Une Carte d'identite</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">
                        La lettre de Recommandation
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="mr-1"
                  type="submit"
                  size="sm"
                  color="primary"
                >
                  <i className="fa fa-arrow-right "></i> Soumettre la demande
                </Button>
              </CardFooter>
            </Card>
          </p>
        </Col>
      </Row>
    );
  }
}

export default Typography;
