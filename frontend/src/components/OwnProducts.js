import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
const OwnProducts = () => {
	let baseurl = process.env.REACT_APP_BASEURL;
	const [products, setProducts] = useState(null);

	useEffect(() => {
		if (localStorage.getItem("jwt")) {
			fetch(baseurl + "/products/ownproducts", {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("jwt"),
				},
			})
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					console.log(res);
					setProducts(res);
				})
				.catch((error) => console.log("error", error));
		}
	}, []);

	const handleProductDelete = (id) => {
		console.log(id);

		fetch(`${baseurl}/products/${id}`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				"Content-type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("jwt"),
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				setProducts(res);
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="div-custom-width">
			{products == null
				? null
				: products.map((product) => {
						if (product.console == null) {
							product.console = "all";
							console.log(product);
						}
						return (
							<div>
								<Button
									onClick={() => handleProductDelete(product.id)}
									className="m-0 btn btn-danger"
								>
									Poista Myynti-ilmoitus
								</Button>
								<SingleProduct
									name={product.name}
									description={product.description}
									price={product.price}
									location={product.location}
									image={product.image}
									console={product.console ? product.console : "all"}
									consoleFilter={null}
									owner={product.owner}
									contact={product.contact}
								/>
							</div>
						);
				  })}
		</div>
	);
};

export default OwnProducts;
