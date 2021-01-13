import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  Col,
  Row,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel} <i className="fa fa-eye"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Bulletin</ModalHeader>
        <ModalBody>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Bulletin</CardTitle>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Fermer <i className="fa fa-times"></i>{" "}
          </Button>{" "}
          <a
            href="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
            download="bulletin"
          >
            <Button color="warning" onClick={toggle}>
              Telecharger <i className="fa fa-download"></i>
            </Button>
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
