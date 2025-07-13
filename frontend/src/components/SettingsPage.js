import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
export const Settings = () => {
  let dummyResults = ["abc", "123", "asd"];

  return (
    <Container>
      <Row>
        <Col>Sivuston teema: Dark/Light</Col>
        <Col>Sivuston väri: Oletus/Vihreä/Oranssi</Col>
        <Col>Sivuston kieli: Suomi/Englanti</Col>
      </Row>
    </Container>
  );
};

export default Settings;
