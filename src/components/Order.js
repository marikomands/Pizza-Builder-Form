import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const Order = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title style={{ width: 120 }}>Size & Crust</Card.Title>
          <Form className="py-3">
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label="Small "
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label="Medium"
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label="Large "
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label="Extra Large "
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label={"small "}
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label={"small "}
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label={"small "}
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  {/* <Col md={6}> */}
                  <Form.Check
                    type="radio"
                    id={`default-`}
                    label={"small "}
                    style={{ width: 70 }}
                    className="fs-5"
                  />
                  {/* </Col> */}
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      {/* ***************************************:Cheese****************************************************************** */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ width: 120, display: "flex" }}>
                Cheese{" "}
                <Form.Check
                  type="checkbox"
                  id={`disabled-default-`}
                  style={{ width: 70 }}
                  className="fs-5"
                />
              </Card.Title>
              <Form.Select className="mt-3">
                <option>Open this select menu</option>
                <option value="normal">Normal</option>
                <option value="light">Light</option>
                <option value="extra">Extra</option>
              </Form.Select>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ width: 120, display: "flex" }}>
                Sauce
                <Form.Check
                  type="checkbox"
                  id={`disabled-default-`}
                  style={{ width: 70 }}
                  className="fs-5"
                />
              </Card.Title>
              <Form.Select className="mt-3">
                <option>Open this select menu</option>
                <option value="robustInspiredTomatoSauce">
                  Robust Inspired Tomato Sauce
                </option>
                <option value="ranch">Ranch</option>
              </Form.Select>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* **********************Toppings******************************************************** */}
      <Card>
        <Card.Body>
          <Card.Title style={{ display: "flex" }}>Topping-Meat</Card.Title>
          <Row className="pt-2">
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* ***************************************:*******Non-Topping********************************** */}
      <Card>
        <Card.Body>
          <Card.Title style={{ display: "flex" }}>Other Topping</Card.Title>
          <Row className="pt-2">
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                style={{ width: 70 }}
                id={`default-`}
                label="chicken"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* ***********************************************:Special Instructions************************************** */}
      <Card>
        <Card.Body>
          <Card.Title style={{ display: "flex" }}>Other Topping</Card.Title>
          <Row className="pt-2">
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Order;
