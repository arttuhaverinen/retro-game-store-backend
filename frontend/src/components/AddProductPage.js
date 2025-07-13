import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	Dropdown,
	FormGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { imageDb } from "../Config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddProductPage = () => {
	let baseurl = process.env.REACT_APP_BASEURL;
	const [productName, setProductName] = useState(null);
	const [productDescription, setProductDescription] = useState(null);
	const [productPrice, setProductPrice] = useState(null);
	const [productLocation, setProductLocation] = useState(null);
	const [productConsole, setProductConsole] = useState(null);
	const [productContact, setProductContact] = useState(null);
	const [failedUpload, setFailedUpload] = useState(false);
	const [successfulUpload, setSuccessfulUpload] = useState(false);
	const [img, setImg] = useState(""); // For Firebase image upload

	const handleClick = async () => {
		const imgRef = ref(imageDb, `files/${v4()}`);
		await uploadBytes(imgRef, img);
		//console.log(imgRef);
		let res = await getDownloadURL(imgRef);
		return res;
		//console.log(imgRef._location.bucket);
		//console.log(imgRef._location.path);

		//let urlBucket = imgRef._location.bucket;
		//let urlPath = imgRef._location.path;
		//let completeUrl = `${urlBucket}/${urlPath}`;
	};

	const handleFailedUpload = () => {
		setFailedUpload(true);
		setTimeout(() => {
			setFailedUpload(false);
		}, 5000);
	};
	const handleSuccesfulUpload = () => {
		setSuccessfulUpload(true);
		setTimeout(() => {
			setSuccessfulUpload(false);
		}, 5000);
	};
	const addProduct = async () => {
		let productImage = null;
		if (img) {
			productImage = await handleClick();
		}
		//console.log("imagelink:", productImage);
		if (localStorage.getItem("jwt")) {
			//console.log("jwt exists");
			//console.log(baseurl + "/products/");
			fetch(baseurl + "/products/", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("jwt"),
				},

				body: JSON.stringify([
					{
						name: productName,
						description: productDescription,
						price: productPrice,
						location: productLocation,
						contact: productContact,
						console: productConsole,
						image: productImage,
					},
				]),
			})
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					console.log(res);
					if (res.status === 500) {
						handleFailedUpload();
						return;
					}
					handleSuccesfulUpload();
				})
				.catch((error) => {
					console.log("error", error);
					handleFailedUpload();
				});
		} else {
			fetch(baseurl + "/products/", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},

				body: JSON.stringify([
					{
						name: productName,
						description: productDescription,
						price: productPrice,
						location: productLocation,
						contact: productContact,
						console: productConsole,
						image: productImage,
					},
				]),
			})
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					console.log(res);

					if (res.status === 500) {
						handleFailedUpload();
						return;
					} else {
						handleSuccesfulUpload();
					}
				})
				.catch((error) => {
					console.log("error", error);
					handleFailedUpload();
				});
		}
	};

	return (
		<div className="div-custom-width">
			<h3 style={{ width: "100%", textAlign: "center" }}>
				Lisää myynti-ilmoitus
			</h3>
			<hr></hr>
			{failedUpload && (
				<div className="alert alert-danger">
					Ilmoituksen lisääminen epäonnistui. Tarkista että kaikki kentät on
					täytetty.
				</div>
			)}
			{successfulUpload && (
				<div className="alert alert-success">
					Myynti-ilmoituksesi lisättiin onnistuneesti.
				</div>
			)}
			<Row className="justify-content-center m-5 ">
				<Col xs={12} md={4}>
					<Form.Group
						onChange={(e) => setProductName(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Tuotteen nimi</Form.Label>
						<Form.Control type="email" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
				</Col>
				<Col xs={12} md={4}>
					<Form.Group
						onChange={(e) => setProductPrice(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Tuotteen hinta</Form.Label>
						<Form.Control type="email" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
				</Col>
				<Col xs={12} md={4}>
					<Form.Group
						onChange={(e) => setProductContact(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Yhteystietosi</Form.Label>
						<Form.Control type="email" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
				</Col>
				<Col xs={12} md={12}>
					<Form.Group
						onChange={(e) => setProductDescription(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Tuotteen kuvaus</Form.Label>
						<Form.Control type="email" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
				</Col>
				<Col xs={12} md={4}>
					<Form.Group
						onChange={(e) => setProductConsole(e.target.value)}
						className="mb-3"
					>
						<Form.Label>Valitse konsoli</Form.Label>
						<Form.Select>
							<option>Kaikki konsolit</option>
							<option>NES</option>
							<option>SNES</option>
							<option>N64</option>
							<option>PS1</option>
						</Form.Select>
					</Form.Group>
				</Col>
				<Col xs={12} md={4}>
					<Form.Group
						onChange={(e) => setProductLocation(e.target.value)}
						className="mb-3"
					>
						<Form.Label>Valitse maakunta</Form.Label>
						<Form.Select>
							<option href="#/action-1">Koko Suomi</option>
							<option href="#/action-2">Ahvenanmaa</option>
							<option href="#/action-3">Etelä-Karjala</option>
							<option href="#/action-4">Etelä-Pohjanmaa</option>
							<option href="#/action-5">Etelä-Savo</option>
							<option href="#/action-6">Kainuu</option>
							<option href="#/action-7">Kanta-Häme</option>
							<option href="#/action-8">Keski-Suomi</option>
							<option href="#/action-9">Kymenlaakso</option>
							<option href="#/action-10">Lappi</option>
							<option href="#/action-11">Pirkanmaa</option>
							<option href="#/action-12">Pohjanmaa</option>
							<option href="#/action-13">Pohjois-Karjala</option>
							<option href="#/action-14">Pohjois-Pohjanmaa</option>
							<option href="#/action-15">Pohjois-Savo</option>
							<option href="#/action-16">Päijät-Häme</option>
							<option href="#/action-17">Satakunta</option>
							<option href="#/action-18">Uusimaa</option>
							<option href="#/action-19">Varsinais-Suomi</option>
						</Form.Select>
					</Form.Group>
				</Col>
				<Col xs={6} md={4}>
					<Button onClick={() => addProduct()} className="w-100 h-100">
						Lisää ilmoitus
					</Button>
				</Col>
				<Col xs={12} md={12}>
					<div>
						<h3>Lisää kuva:</h3>
						<input type="file" onChange={(e) => setImg(e.target.files[0])} />
						{/*<button onClick={handleClick}>upload</button>*/}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AddProductPage;
