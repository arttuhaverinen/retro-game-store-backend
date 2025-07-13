import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import nesLogo from "./images/NES_logo.png";
import ps1Logo from "./images/Playstation_logo_colour.svg.png";
import sneLogo from "./images/snes.jpg";
import n64Logo from "./images/n64.png";

export const ProductsFound = () => {
	let dummyResults = ["abc", "123", "asd"];
	let baseurl = process.env.REACT_APP_BASEURL;
	//let baseurl = "https://retro-game-store-4beeba909987.herokuapp.com";

	const [products, setProducts] = useState(null);
	const [consoleFilter, setConsoleFilter] = useState(null);

	useEffect(() => {
		let products = fetch(baseurl + "/products/")
			.then((res) => res.json())
			.then((res) => {
				//console.log("res", res);
				setProducts(res);
			})
			.catch((err) => console.log(err));
	}, []);

	const sortByPrice = () => {
		//console.log("sorting this data: ", products);
		const lowestPrice = [...products].sort((a, b) => a.price - b.price);
		setProducts(lowestPrice);
	};

	const sortByPriceDesc = () => {
		//console.log("sorting this data: ", products);
		const lowestPrice = [...products].sort((a, b) => b.price - a.price);
		setProducts(lowestPrice);
	};

	const sortByConsole = (console) => {
		if (console == consoleFilter) {
			setConsoleFilter(null);
		} else {
			setConsoleFilter(console);
		}
	};

	return (
		<div className="div-custom-width">
			<hr></hr>
			<Row className="">
				<Col className="mb-3" xs={4} md={2}>
					Hakutuloksia: {products ? products.length : null}
				</Col>
				<Col className="m-0 p-0 g-0" xs={4} sm={4} md={2}>
					<button className="w-100" onClick={(e) => sortByPrice()}>
						hintajärjestys ↑
					</button>{" "}
				</Col>
				<Col className="m-0 p-0 g-0" xs={4} sm={4} md={2}>
					<button className="w-100" onClick={(e) => sortByPriceDesc()}>
						hintajärjestys ↓
					</button>
				</Col>
				<Col className="ml-5" xs={3} md={1}>
					<Image
						fluid
						className="object-fit-contain"
						style={{ MaxWidth: "20%", height: "50px", cursor: "pointer" }}
						src={nesLogo}
						onClick={() => sortByConsole("NES")}
					></Image>
				</Col>
				<Col xs={3} sm={3} md={1}>
					<Image
						className="object-fit-contain"
						style={{ MaxWidth: "20%", height: "50px", cursor: "pointer" }}
						src={ps1Logo}
						onClick={() => sortByConsole("PS1")}
					></Image>
				</Col>
				<Col xs={3} md={1}>
					<Image
						className="object-fit-contain"
						style={{ MaxWidth: "20%", height: "50px", cursor: "pointer" }}
						src={sneLogo}
						onClick={() => sortByConsole("SNES")}
					></Image>
				</Col>
				<Col xs={3} md={1}>
					<Image
						className="object-fit-contain hover-zoom"
						style={{ MaxWidth: "20%", height: "50px", cursor: "pointer" }}
						src={n64Logo}
						onClick={() => sortByConsole("N64")}
					></Image>
				</Col>
			</Row>
			<hr></hr>

			{products == null
				? null
				: products.map((product) => {
						//console.log(product);
						if (product.console == null) {
							product.console = "all";
							//console.log(product.owner);
						}
						if (consoleFilter) {
							//console.log(product.console);

							if (
								product.console.toUpperCase() == consoleFilter.toUpperCase()
							) {
								return (
									<SingleProduct
										name={product.name}
										description={product.description}
										price={product.price}
										location={product.location}
										image={product.image}
										console={product.console ? product.console : "all"}
										owner={product.owner}
										consoleFilter={consoleFilter}
										contact={product.contact}
									/>
								);
							}
						} else {
							return (
								<SingleProduct
									name={product.name}
									description={product.description}
									price={product.price}
									location={product.location}
									image={product.image}
									console={product.console ? product.console : "all"}
									consoleFilter={consoleFilter}
									owner={product.owner}
									contact={product.contact}
								/>
							);
						}
				  })}
		</div>
	);
};

export default ProductsFound;
