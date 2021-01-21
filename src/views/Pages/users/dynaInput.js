import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

function App() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div>
            <FormGroup className="box">
              <Row>
                <Col>
                  <Input
                    name="date-input"
                    type="date"
                    id="date"
                    placeholder="Date"
                    value={x.firstName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                <Col>
                  <Input
                    className="ml10"
                    name="text-input"
                    type="text"
                    id="classe"
                    placeholder="Classe"
                    value={x.lastName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                <Col>
                  <Input
                    className="ml10"
                    name="text-input"
                    type="text"
                    id="section"
                    placeholder="Section"
                    value={x.lastName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                <Col>
                  <Input
                    className="ml10"
                    name="text-input"
                    type="text"
                    id="etablissement"
                    placeholder="Etablissement"
                    value={x.lastName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                <Col>
                  <Input
                    className="ml10"
                    name="Text-input"
                    type="text"
                    id="ville"
                    placeholder="Ville"
                    value={x.lastName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                <Col>
                  <Input
                    className="ml10"
                    id="pays"
                    name="Text-input"
                    type="text"
                    placeholder="Pays"
                    value={x.lastName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Col>
                {inputList.length !== 1 && (
                  <Button
                    className="mr10 bg-danger"
                    onClick={() => handleRemoveClick(i)}
                  >
                    <i className="fa fa-minus"></i>
                  </Button>
                )}
              </Row>
            </FormGroup>
            <div className="btn-box">
              {inputList.length - 1 === i && (
                <Button
                  className="ml-2 bg-success mb-3"
                  onClick={handleAddClick}
                >
                  <i className="fa fa-plus"></i>
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
