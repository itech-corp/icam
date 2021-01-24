import React, { Component, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Spinner,
} from "reactstrap";
import icam_logo from "../../../assets/img/icam.png";
import { FirebaseContext } from "../../../components/Firebase";

const Register = (props) => {
  const data = {
    email: "",
    password: "",
    confirmation: "",
    role: "user",
    fullName: "",
    status: "En cours de traitement",
    id: "",
  };
  const [loginData, setLoginDate] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);

  const handleChange = (e) => {
    setLoginDate({ ...loginData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("submited");
    setIsLoading(true);
    e.preventDefault();
    const { email, password } = loginData;
    firebase
      .signupUser(email, password)
      .then((user) => {
        setIsLoading(false);
        console.log("success");
        setLoginDate({ ...data });
        props.history.push("/profile");
        saveUser();
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  const saveUser = () => {
    const user = firebase.getCurrentUser();
    firebase.writeUserData(user.uid, loginData);
  };

  const { email, password, confirmation } = loginData;

  const spinner = isLoading ? (
    <Spinner className="text-center" color="warning" />
  ) : (
    <Button style={{ backgroundColor: "#bcc0c4", color: "white" }} block>
      S'enregistrer
    </Button>
  );
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4 ">
              <CardBody className="p-4">
                <Form onSubmit={handleSubmit}>
                  <h1>Creer votre compte etudiant</h1>
                  <p className="text-muted text-center">
                    <img src={icam_logo} />{" "}
                  </p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="fullName"
                      onChange={handleChange}
                      type="text"
                      placeholder="Nom complet"
                      autoComplete="text"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      onChange={handleChange}
                      type="text"
                      placeholder="Votre address email"
                      autoComplete="email"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="Mot de passe"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="confirmation"
                      onChange={handleChange}
                      type="password"
                      placeholder="confirmation du mot de passe"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <div className="w-100 text-center align-content">
                    {spinner}
                  </div>
                </Form>
                <div className="linkContainer">
                  <Link className="simpleLink" to="/login">
                    Deja inscrit ? Connectez vous
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
