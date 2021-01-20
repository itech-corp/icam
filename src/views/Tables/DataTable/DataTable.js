import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";
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

  render() {
    console.log(this.props.users);
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
              <TableHeaderColumn dataField="pourcentage" dataSort>
                Pourcentage obtenu au BAC
              </TableHeaderColumn>
              <TableHeaderColumn dataField="nomEcole" dataSort>
                Nom de l'ecole
              </TableHeaderColumn>
              <TableHeaderColumn dataField="sectionFiliere" dataSort>
                Section ou filiere d'etude
              </TableHeaderColumn>
              <TableHeaderColumn dataField="sectionFiliere" dataSort>
                Status
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
