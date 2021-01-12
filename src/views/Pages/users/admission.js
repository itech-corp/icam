import React, { Component } from "react";
import { Button } from "reactstrap";
class Typography extends Component {
  render() {
    return (
      <div>
        <p className="text-center">
          <Button size="lg" className="btn-dropbox btn-brand  mr-3 mb-1">
            <i className="fa fa-pencil"></i>
            <span>Faire une demande d'admission</span>
          </Button>
          <Button size="lg" className="btn-instagram btn-brand  mr-1 mb-1">
            <i className="fa fa-eye"></i>
            <span>Consulter Votre demande d'admission</span>
          </Button>
        </p>
      </div>
    );
  }
}

export default Typography;
