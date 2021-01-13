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

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        {buttonLabel} <i className="fa fa-plus"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Bulletins
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              {" "}
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://www.dgsn.cm/wp-content/uploads/2020/01/SEJOUR-600x406.png"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col>
              {" "}
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://www.icilome.com/sharecontentahn/794643.jpg"
                  alt="Card image cap"
                />
              </Card>
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
