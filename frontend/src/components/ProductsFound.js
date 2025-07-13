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
import { act } from "react";

export const ProductsFound = () => {
	let dummyResults = ["abc", "123", "asd"];
	let baseurl = process.env.REACT_APP_BASEURL;
	//let baseurl = "https://retro-game-store-4beeba909987.herokuapp.com";

	const [products, setProducts] = useState(null);
	const [consoleFilter, setConsoleFilter] = useState(null);
	const [nesClicked, setNesClicked] = useState(false);
	const [Ps1Clicked, setPs1Clicked] = useState(false);
	const [SnesClicked, setSnesClicked] = useState(false);
	const [n64Clicked, setN64Clicked] = useState(false);

	useEffect(() => {
		let products = fetch(baseurl + "/products/")
			.then((res) => res.json())
			.then((res) => {
				//console.log("res", res);
				setProducts(res);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleConsoleCategory = (active) => {
		setNesClicked(false);
		setSnesClicked(false);
		setPs1Clicked(false);
		setN64Clicked(false);

		if (active == "nes") {
			setNesClicked(true);
		}
		if (active == "snes") {
			setSnesClicked(true);
		}
		if (active == "ps1") {
			setPs1Clicked(true);
		}
		if (active == "n64") {
			setN64Clicked(true);
		}
	};

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
				<Col className="mb-3" xs={12} md={2}>
					Hakutuloksia: {products ? products.length : null}
				</Col>
				<Col className="mb-3" xs={6} sm={4} md={2}>
					<button className="w-100" onClick={(e) => sortByPrice()}>
						hintajärjestys ↑
					</button>{" "}
				</Col>
				<Col className="mb-3" xs={6} sm={4} md={2}>
					<button className="w-100" onClick={(e) => sortByPriceDesc()}>
						hintajärjestys ↓
					</button>
				</Col>

				<Col md={4} xs={12} className="">
					<div className=" d-none d-md-flex justify-content-center ">
						<h5 className="text-center">Kategoriat</h5>
					</div>
					<div className="d-flex mx-auto justify-content-between">
						<h6 className="d-block d-md-none text-center">Kategoriat</h6>
						<Image
							fluid
							className="object-fit-contain"
							style={{
								MaxWidth: "20%",
								height: "50px",
								cursor: "pointer",
								border: nesClicked
									? "2px solid yellow"
									: "2px solid transparent",
							}}
							src={nesLogo}
							onClick={() => {
								sortByConsole("nes");
								handleConsoleCategory("nes");
							}}
						></Image>
						<Image
							className="object-fit-contain"
							style={{
								MaxWidth: "20%",
								height: "50px",
								padding: "2px",
								cursor: "pointer",
								border: Ps1Clicked
									? "2px solid yellow"
									: "2px solid transparent",
							}}
							src={ps1Logo}
							onClick={() => {
								sortByConsole("ps1");
								handleConsoleCategory("ps1");
							}}
						></Image>
						<Image
							className="object-fit-contain"
							style={{
								MaxWidth: "20%",
								height: "50px",
								cursor: "pointer",
								border: SnesClicked
									? "2px solid yellow"
									: "2px solid transparent",
							}}
							src={sneLogo}
							onClick={() => {
								sortByConsole("SNES");
								handleConsoleCategory("snes");
							}}
						></Image>
						<Image
							className="object-fit-contain hover-zoom"
							style={{
								MaxWidth: "20%",
								height: "50px",
								cursor: "pointer",
								border: n64Clicked
									? "2px solid yellow"
									: "2px solid transparent",
							}}
							src={n64Logo}
							onClick={() => {
								sortByConsole("N64");
								handleConsoleCategory("n64");
							}}
						></Image>
					</div>
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
