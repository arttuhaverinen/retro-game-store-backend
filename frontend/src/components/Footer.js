import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <Container fluid className='bg-success p-2 fixed-bottom justify' >
      <Row className='justify-content-md-center'>
        <Col xs={3} className='text-center'>Contact</Col>
        <Col xs={6} className='text-center'>Social media(wider)</Col>
        <Col xs={3} className='text-center'>Terms</Col>
      </Row>
    </Container>
  )
}

export default Footer;