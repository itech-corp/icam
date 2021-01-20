import React, { useContext, useEffect, useState } from "react";
import { Container, Button, Nav, Row } from "reactstrap";
import { FirebaseContext } from "../../../components/Firebase";
import {
  AppFooter,
  AppHeader,
  AppNavbarBrand,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
} from "@coreui/react";
import Admission from "./admission";
import _user_nav from "../../../_user_nav";

import logo from "../../../assets/img/brand/logo.svg";
import sygnet from "../../../assets/img/brand/sygnet.svg";
import DefaultAside from "../../../containers/DefaultLayout/DefaultAside";

const DefaultFooter = React.lazy(() =>
  import("../../../containers/DefaultLayout/DefaultFooter")
);
const DefaultHeader = React.lazy(() =>
  import("../../../containers/DefaultLayout/DefaultHeader")
);

const DefaultLayout = (props) => {
  const firebase = useContext(FirebaseContext);
  const [userState, setUserState] = useState("Nouveau");
  const [user, setUser] = useState(null);

  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  const signOut = (e) => {
    console.log("logingOUt");
    firebase.signoutUser().then(() => {
      props.history.push("/login");
    });
  };
  const logUsers = () => {
    firebase.getAllUser();
  };

  const getUserState = () => {
    const userID = firebase.getCurrentUser();

    if (userID)
      firebase.getCurrentUserState(userID.uid).then((status) => {
        setUserState(status);
        console.log(status);
      });
  };
  const getUser = () => {
    const userID = firebase.getCurrentUser();

    setUser(userID);
    console.log(userID);
  };
  useEffect(() => {
    //  getUserState();
    getUser();
    getUserState();
  }, []);

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
              ml-0
            />
          </div>

          <Button color="danger" className="bg-danger" onClick={signOut}>
            Deconnexion
          </Button>
        </Row>
      </AppHeader>
      <div className="app-body">
        <main className="main mt-4">
          <Container fluid>
            <Admission User={user} log={() => logUsers} />
          </Container>
        </main>
      </div>
      <AppFooter className="bg-dark w-100">
        <DefaultFooter />
      </AppFooter>
      <AppSidebarFooter className=" bg-dark w-100"></AppSidebarFooter>
    </div>
  );
};

export default DefaultLayout;
