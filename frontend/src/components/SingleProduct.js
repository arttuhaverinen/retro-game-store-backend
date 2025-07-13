import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";

const SingleProduct = ({
	name,
	description,
	price,
	location,
	image,
	console,
	consoleFilter,
	owner,
	contact,
}) => {
	const [filterByConsole, setFilterByConsole] = useState(false);

	const checkFilters = () => {
		if (consoleFilter != null) {
			setFilterByConsole(true);
		}
	};

	return (
		<div className="mb-4 p-0">
			<Row style={{ height: "300px" }} className="border rounded">
				<Col className="m-0 p-0" lg={3} md={3} xs={5}>
					<Image
						className="object-fit-cover h-100 w-100"
						style={{ maxHeight: "300px" }}
						fluid
						src={
							image
								? image
								: "https://firebasestorage.googleapis.com/v0/b/retrostore-ac1ea.appspot.com/o/175-1.jpg?alt=media&token=80ec7c28-ba51-4e82-b163-9036ea33aef6"
						}
					></Image>
				</Col>
				<Col xs={7} md={9} lg={9} className="justify-content-between ">
					<Row className="h-100 p-1 ">
						<Row className="mx-0  border-bottom align-items-center">
							<Col xs={6} md={10} className="p-0">
								<h4 className="p-0 m-0">{name}</h4>
							</Col>
							<Col className="text-end" xs={6} md={2}>
								<h4>{console.toUpperCase()}</h4>
							</Col>
						</Row>
						<Row
							className=" align-middle w-100 mx-0 h-50 border-bottom"
							style={{ overflow: "hidden" }}
						>
							{description}
						</Row>
						<Row className="d-flex justify-content-center mx-0  ">
							<Col className="p-0 m-0" xs={6} md={4}>
								<h3 className="m-0 p-0"> {price + "€"}</h3>
								<h6 className="m-0 p-0">{location}</h6>
							</Col>
							<Col
								className="p-0 d-flex justify-content-end d-md-block p-1"
								xs={6}
								md={4}
							>
								<div>
									<h6>Myyjä:</h6>
									{owner ? <h6>{owner}</h6> : <h6>Vieras</h6>}
								</div>
							</Col>
							<Col className="p-0  my-1 " xs={12} md={4}>
								<h6>Yhteystiedot:</h6>
								<h6>{contact}</h6>
							</Col>
						</Row>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default SingleProduct;
