import React, { useState } from "react";
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
  Spinner,
} from "reactstrap";
import MyViewModal from "./View_Modal";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  let mod = <Spinner color="danger" />;
  return (
    <div>
      <Button color="warning" onClick={toggle}>
        {buttonLabel} <i className="fa fa-arrow-right"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <h4 className="text-center">
                Votre demande d'admission a ete enregistrer
              </h4>
            </Col>
            <Col xs={12}>
              <h1 className="text-center ">
                <i
                  style={{ borderRadius: 50 }}
                  className="fa fa-check bg-success p-2"
                ></i>
              </h1>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Fermer <i className="fa fa-times"></i>
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
