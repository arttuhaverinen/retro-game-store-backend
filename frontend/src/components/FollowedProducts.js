import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
export const FollowedProducts = () => {
  let dummyResults = ["abc", "123", "asd"];

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <hr></hr>
        Premium-jäsenyydellä voit lisätä seurattujen tuotteiden määrää!
      </Row>
    </Container>
  );
};

export default FollowedProducts;
