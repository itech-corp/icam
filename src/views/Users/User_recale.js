import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { FirebaseContext } from "../../components/Firebase";
import DataTable from "../Tables/DataTable/DataTable";

import usersData from "./UsersData";

function UserRow(props) {
  const user = props.user;

  const userLink = `/users/${user[0]}`;
  console.log(user);
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

  return (
    <tr>
      <th scope="row">
        <Link to={userLink}>{user[0]}</Link>
      </th>
      <td>
        <Link to={userLink}>{user[1].fullName}</Link>
      </td>
      <td>
        <Link to={userLink}>
          <Badge color={getBadge(user[1].status)}>{user[1].status}</Badge>
        </Link>
      </td>
    </tr>
  );
}
let once = true;
const Users = () => {
  const datableUser = [];
  const userList = usersData.filter((user) => user.status !== "Inactive");
  const firebase = useContext(FirebaseContext);
  const userData = [];

  const [users, setUsers] = useState(userData);
  const [datable, setDatable] = useState();
  const LoadUsers = () => {
    if (once) {
      firebase.getAllUsers().then((snapshot) => {
        setUsers(Object.entries(snapshot.val()));
        Object.entries(snapshot.val()).map((usr) => datableUser.push(usr[1]));
        setDatable(datableUser);
        console.log(users);
        once = false;
      });
    }
  };

  return (
    <div className="animated fadeIn">
      {" "}
      {LoadUsers()}
      <Row>
        <DataTable users={datable} />
        <Col xl={6}>
          {/* <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Users{" "}
              <small className="text-muted"></small>
            </CardHeader>
            <CardBody>
             <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nom complet</th>
                    <th scope="col">statut</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <UserRow key={index} user={user} />
                  ))}
                </tbody>
              </Table>
            
            </CardBody>
          </Card>  */}
        </Col>
      </Row>
    </div>
  );
};

export default Users;
