import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const ProductSearch = () => {
	return (
		<Container className="Product-search">
			<Row className="gap-1 justify-content-md-center mb-1">
				<Col xs={2} className="bg-success p-1">
					Hae tuotteita
				</Col>
				<Col xs={6} className="bg-success p-1">
					<Form.Control
						variant="light"
						type="text"
						placeholder="Etsi tuotetta"
					/>
				</Col>
				<Col xs={1} className="bg-success p-1">
					{" "}
					<Button>
						<Link to={"/results"}>Hae</Link>
					</Button>{" "}
				</Col>
			</Row>
			<Row className="gap-1 justify-content-md-center">
				<Col xs={3} className="bg-success">
					Kategoria
					<hr></hr>
					<Dropdown>
						<Dropdown.Toggle variant="light" id="dropdown-basic">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Tietokoneet</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Komponentit</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Oheistuotteet</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col xs={3} className="bg-success">
					Maakunta
					<hr></hr>
					<Dropdown style={{ minWidth: "100%" }}>
						<Dropdown.Toggle
							variant="light"
							id="dropdown-basic2"
							style={{ minWidth: "100%" }}
						>
							Maakunta
						</Dropdown.Toggle>
						<Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
							<Dropdown.Item href="#/action-1">Koko Suomi</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href="#/action-2">Ahvenanmaa</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Etelä-Karjala</Dropdown.Item>
							<Dropdown.Item href="#/action-4">Etelä-Pohjanmaa</Dropdown.Item>
							<Dropdown.Item href="#/action-5">Etelä-Savo</Dropdown.Item>
							<Dropdown.Item href="#/action-6">Kainuu</Dropdown.Item>
							<Dropdown.Item href="#/action-7">Kanta-Häme</Dropdown.Item>
							<Dropdown.Item href="#/action-8">Keski-Suomi</Dropdown.Item>
							<Dropdown.Item href="#/action-9">Kymenlaakso</Dropdown.Item>
							<Dropdown.Item href="#/action-10">Lappi</Dropdown.Item>
							<Dropdown.Item href="#/action-11">Pirkanmaa</Dropdown.Item>
							<Dropdown.Item href="#/action-12">Pohjanmaa</Dropdown.Item>
							<Dropdown.Item href="#/action-13">Pohjois-Karjala</Dropdown.Item>
							<Dropdown.Item href="#/action-14">
								Pohjois-Pohjanmaa
							</Dropdown.Item>
							<Dropdown.Item href="#/action-15">Pohjois-Savo</Dropdown.Item>
							<Dropdown.Item href="#/action-16">Päijät-Häme</Dropdown.Item>
							<Dropdown.Item href="#/action-17">Satakunta</Dropdown.Item>
							<Dropdown.Item href="#/action-18">Uusimaa</Dropdown.Item>
							<Dropdown.Item href="#/action-19">Varsinais-Suomi</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col xs={3} className="bg-success">
					Hinta
					<hr></hr>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Hinta vähintään</Form.Label>
							<Form.Control type="email" placeholder="0" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
							<Form.Label>Hinta enintään</Form.Label>
							<Form.Control type="email" placeholder="0" />
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductSearch;
