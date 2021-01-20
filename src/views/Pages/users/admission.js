import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
class Typography extends Component {
  render() {
    const useLink = `/submit/`;
    const userlink = `/my_admission/ViymPvruPBf2UAw3HGqCGtkfRuC3`;

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
          <Link to={userlink}>
            <Button
              style={{ backgroundColor: "#bcc0c4", color: "white" }}
              size="lg"
              className="btn-instagram btn-brand  mr-1 mb-1"
            >
              <i className="fa fa-eye"></i>
              <span>Consulter Votre demande d'admission</span>
            </Button>
          </Link>
        </p>
      </div>
    );
  }
}

export default Typography;
