import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span className="w-100 text-center">
          <a
            style={{ textDecoration: "none", color: "orange" }}
            href="https://ulc-icam.com/"
          >
            ULC-ICAM
          </a>{" "}
          &copy; 2021 .
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
