import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import DefaultHeaderDropdown from "./DefaultHeaderDropdown";
import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";
import { Button } from "reactstrap";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 109, height: 45, alt: "ICAM Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "ICAM Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink
              onClick={() => this.props.onLogout()}
              to="#"
              className="nav-link"
            >
              <Button className="bg-danger mr-2">
                <i className="icon-power "></i> Deconnexion
              </Button>
            </NavLink>
          </NavItem>
        </Nav>

        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
