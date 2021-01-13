import React, { Component } from "react";
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
} from "reactstrap";
import ModalPerso from "../Modals/Modal";
import ModalCni from "../Modals/Modal_cni";

import usersData from "./UsersData";

class User extends Component {
  render() {
    const user = usersData.find(
      (user) => user.id.toString() === this.props.match.params.id
    );

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
                    {user.parcours.map((parcours, index) => {
                      return (
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
                            <td>{parcours.date}</td>
                            <td>{parcours.classe}</td>
                            <td>{parcours.section}</td>
                            <td>{parcours.etablissement}</td>
                            <td>{parcours.ville}</td>
                            <td>{parcours.pays}</td>
                          </tr>
                        </table>
                      );
                    })}

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
                  <Col xs={4}>
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://www.dgsn.cm/wp-content/uploads/2020/01/PASSPORT-ORDIN-1467x2000.jpg"
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">Passeport</CardTitle>

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
                        src="https://www.dgsn.cm/wp-content/uploads/2020/01/SEJOUR-600x406.png"
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">Carte d'identite</CardTitle>

                        <ModalPerso buttonLabel="Voir plus" />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcR0UcIp_owkgnLS6syPMRKY99v9nB3T1Kg&usqp=CAU"
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
                        src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">Bulletins</CardTitle>

                        <ModalPerso
                          buttonLabel="Voir plus"
                          className="primary"
                        />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://i.stack.imgur.com/FbHNV.png"
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
                      <CardImg
                        top
                        width="100%"
                        src="https://i.pinimg.com/originals/24/95/e1/2495e1e9fe01fb42e44022f674064210.jpg"
                        alt="Card image cap"
                      />
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
                  <Button className=" w-50" color="success">
                    Admettre
                  </Button>
                  <Button color="danger w-50">Recaler</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
