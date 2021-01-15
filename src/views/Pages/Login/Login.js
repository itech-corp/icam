import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../components/Firebase";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import icam_logo from "../../../assets/img/icam.png";
import Dashboard from "../../Dashboard/Dashboard";

const Login = (props) => {
  const data = {
    pseudo: "",
    email: "",
    password: "",
  };

  const [loginData, setLoginDate] = useState(data);
  const [redirection, setRedirection] = useState(true);
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);

  const handleChange = (e) => {
    setLoginDate({ ...loginData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("submited");
    e.preventDefault();
    const { email, password } = loginData;
    firebase
      .loginUser(email, password)
      .then((user) => {
        console.log("success");
        if (user.email === "admin-admission@ulc-icam.com") {
          props.history.push("/Dashboard");
        }
        setLoginDate({ ...data });
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  const isLogedIn = () => {
    firebase.auth.onAuthStateChanged((user) => {
      setRedirection(false);
      user ? props.history.push("/admission") : props.history.push("/login");
    });
  };

  const { pseudo, email, password } = loginData;

  const errorMsg = error !== "" && <span>{error.message}</span>;
  if (redirection) {
    isLogedIn();
  }
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <h1>Connexion</h1>
                    <p className="text-muted">
                      Connecter vous a votre compte etudiant
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Nom d'utilisateur"
                        autoComplete="username"
                        id="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          style={{
                            backgroundColor: "#bcc0c4",
                            color: "white",
                          }}
                          className="px-4"
                        >
                          Connexion
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Mot de passe Oublier ?
                        </Button>
                      </Col>
                      <Col className="text-danger">{errorMsg}</Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card
                className="text-white bg-warning py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CardBody className="text-center">
                  <div>
                    <div>
                      <img style={{ width: "50%" }} src={icam_logo} />
                    </div>
                    <h2>S'inscrire</h2>
                    <p>
                      Inscrivez-vous et commencer votre demande d'admission en
                      ligne
                    </p>
                    <Link to="/register">
                      <Button
                        style={{
                          backgroundColor: "#bcc0c4",
                          color: "white",
                        }}
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        S'inscrire Maintenant{" "}
                        <i className="fa fa-arrow-circle-right"></i>
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
