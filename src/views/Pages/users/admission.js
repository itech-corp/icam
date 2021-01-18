import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
class Typography extends Component {
  render() {
    const useLink = `/submit/${this.props.User}`;
    return (
      <div>
        <p className="text-center">
          <Link to={useLink}>
            <Button
              size="lg"
              className="btn-dropbox btn-brand bg-warning mr-3 mb-1"
            >
              <i className="fa fa-pencil"></i>
              <span>Faire une demande d'admission</span>
            </Button>
          </Link>
          <Button
            style={{ backgroundColor: "#bcc0c4", color: "white" }}
            size="lg"
            className="btn-instagram btn-brand  mr-1 mb-1"
          >
            <i className="fa fa-eye"></i>
            <span>Consulter Votre demande d'admission</span>
          </Button>
        </p>
      </div>
    );
  }
}

export default Typography;
