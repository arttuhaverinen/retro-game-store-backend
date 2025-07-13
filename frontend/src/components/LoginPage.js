import React, { useState, useContext } from "react";
import { Appcontext } from "../App";
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

const LoginPage = () => {
	let baseurl = process.env.REACT_APP_BASEURL;
	const { appUserName, setAppUserName, appJsonToken, setAppJsonToken } =
		useContext(Appcontext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginFailed, setLoginFailed] = useState(false);
	const [loginSucceeded, setLoginSucceeded] = useState(false);

	const handleLoginFailed = () => {
		setLoginFailed(!loginFailed);
		setTimeout(() => {
			setLoginFailed(false);
		}, 5000);
	};
	const handleLoginSucceeded = () => {
		setLoginSucceeded(true);
		setTimeout(() => {
			setLoginSucceeded(false);
		}, 5000);
	};

	const login = () => {
		fetch(baseurl + "/auth/login", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ username: username, password: password }),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				console.log(res.user.username);
				setAppUserName(res.user.username);
				localStorage.setItem("username", res.user.username);
				localStorage.setItem("jwt", res.jwt);
				setAppJsonToken(res.jwt);
				console.log("login succeeded");
				handleLoginSucceeded();
			})
			.catch((error) => {
				console.log(error.status);
				handleLoginFailed();
			});
	};

	return (
		<Container className="w-50">
			{/*console.log(localStorage.getItem("jwt"))*/}
			{console.log(loginSucceeded)}
			<Row className="justify-content-center">
				{loginFailed && (
					<div className="alert alert-danger">
						Väärä käyttäjänimi tai salasana.
					</div>
				)}
				{loginSucceeded && (
					<div className="alert alert-success">Kirjautuminen onnistui.</div>
				)}
				<Form>
					<Form.Group
						onChange={(e) => setUsername(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Käyttäjänimi</Form.Label>
						<Form.Control type="email" placeholder="Enter username" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
					<Form.Group
						onChange={(e) => setPassword(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Salasana</Form.Label>
						<Form.Control type="password" placeholder="Enter password" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
					<Button onClick={() => login()} className="w-100">
						Kirjaudu
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default LoginPage;
