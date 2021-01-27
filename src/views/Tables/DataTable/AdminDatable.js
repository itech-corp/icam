import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "./_data";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = this.props.users;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false,
    };
  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`;
    return (
      <NavLink strict to={id}>
        {" "}
        {cell}{" "}
      </NavLink>
    );
  }
  rowFormat(cell, row) {
    const id = `/users/${row.id}`;
    return row.role == "admin" ? (
      <Button color="danger" strict to={id}>
        Demettre administrateur
      </Button>
    ) : (
      <Button color="success" strict to={id}>
        Nommer administrateur
      </Button>
    );
  }
  getBadge = (status) => {
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
  adminToggle = (role) => {};

  render() {
    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>
            {this.props.tableTitle}
          </CardHeader>
          <CardBody>
            <BootstrapTable
              data={this.props.users}
              version="4"
              striped
              hover
              pagination
              search
              options={this.options}
            >
              <TableHeaderColumn
                dataField="fullName"
                dataSort
                dataFormat={this.nameFormat}
              >
                Name
              </TableHeaderColumn>
              <TableHeaderColumn isKey dataField="email">
                Email
              </TableHeaderColumn>

              <TableHeaderColumn dataField="role" columnClassName="" dataSort>
                Roles
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="role"
                dataFormat={this.rowFormat}
                columnClassName=""
                dataSort
              >
                Actions
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
