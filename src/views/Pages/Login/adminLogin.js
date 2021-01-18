import React, { Component, useContext, useEffect, useState } from "react";
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
import usersData from "../../Users/UsersData";
import login from "../Login/";

const AdminLogin = (props) => {
  const data = {
    pseudo: "",
    email: "",
    password: "",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginData, setLoginDate] = useState(data);
  const [redirection, setRedirection] = useState(true);
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);
  useEffect(() => {
    if (email === "admin-admission@ulc-icam.com") {
      setIsAdmin(true);
    }
  }, [email]);

  const handleChange = (e) => {
    setLoginDate({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("submited");
    e.preventDefault();

    firebase
      .loginUser(email, password, isAdmin)
      .then((user) => {
        setEmail("");
        setPassword("");
        console.log("success");
        if (email === "admin-admission@ulc-icam.com") {
          console.log(`isAdmin = ${isAdmin}`);
          user
            ? props.history.push("/dashboard")
            : props.history.push("/login");
        } else {
          console.log(`isAdmin = ${isAdmin}`);
          user
            ? props.history.push("/admission")
            : props.history.push("/login");
        }
        setLoginDate({ ...data });
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error);
        console.log(error);
      });
  };
  const isLogedIn = () => {
    firebase.auth.onAuthStateChanged((user, email) => {
      setRedirection(false);
    });
  };

  //const { pseudo, email, password } = loginData;

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
                    <h1>
                      <i className="fa fa-lock"></i> Portail Admin
                    </h1>
                    <p className="text-muted">
                      Se Connecter en tant qu'administrateur
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="email"
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        {btn ? (
                          <Button
                            style={{
                              backgroundColor: "#f5ce42",
                              color: "white",
                            }}
                            className="px-4"
                          >
                            Connexion
                          </Button>
                        ) : (
                          <Button
                            disabled
                            style={{
                              backgroundColor: "#bcc0c4",
                              color: "white",
                            }}
                            className="px-4"
                          >
                            Connexion
                          </Button>
                        )}
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

export default AdminLogin;
