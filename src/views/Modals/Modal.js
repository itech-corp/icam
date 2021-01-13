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
            {" "}
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.pinimg.com/originals/29/65/2c/29652c0429abdbf16039ecd246988a28.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Bulletins</CardTitle>

                  <MyViewModal buttonLabel="Voir" className="none" />
                </CardBody>
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
