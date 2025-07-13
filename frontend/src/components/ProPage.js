import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export const ProPage = () => {

let dummyResults = ["abc", "123", "asd"]

  return (
    <Container>
        Pro-jäsenyydellä saat käyttöösi seuraavat ominaisuudet:
        <Row>
            <Col>Myynnissä olevat tuotteesi ovat ensimmäisten joukossa hakutuloksissa</Col>
            <Col>Myynti-ilmoituksesi uusiutuvat automaattisesti</Col>
            <Col>Voit seurata useampaa kuin kolmea tuotetta</Col>
        </Row>
    </Container>
  )
}

export default ProPage;
