import { React, useState, useContext } from "react";
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

const RegisterPage = () => {
	let baseurl = process.env.REACT_APP_BASEURL;
	const { appJsonToken, setAppJsonToken } = useContext(Appcontext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [registerationFailed, setRegisterationFailed] = useState(false);
	const [registerSucceeded, setRegisterSucceeded] = useState(false);

	const handleRegisterationFailed = () => {
		setRegisterationFailed(!registerationFailed);
		setTimeout(() => {
			setRegisterationFailed(false);
		}, 5000);
	};

	const handleRegisterSucceeded = () => {
		setRegisterSucceeded(true);
		setTimeout(() => {
			setRegisterSucceeded(false);
		}, 5000);
	};

	const login = () => {
		console.log(baseurl + "/auth/");
		fetch(baseurl + "/auth/", {
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
				console.log(res.status);
				if (res.status === 500) {
					handleRegisterationFailed();
					return;
				}
				handleRegisterSucceeded();
				console.log(res);
				console.log(res.password);
				localStorage.setItem("Token", res.password);
				setAppJsonToken("Token", res.password);
			})
			.catch((error) => {
				console.log("error", error);
				handleRegisterationFailed();
			});
	};
	return (
		<Container className="w-50">
			{registerationFailed && (
				<div className="alert alert-danger">Virhe rekisteröinnissä.</div>
			)}
			{registerSucceeded && (
				<div className="alert alert-success">Rekisteröityminen onnistui.</div>
			)}
			<Row className="justify-content-center">
				<Form>
					<Form.Group
						onChange={(e) => setUsername(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Valitse käyttäjänimesi</Form.Label>
						<Form.Control type="email" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>
					<Form.Group
						onChange={(e) => setPassword(e.target.value)}
						className="mb-3"
						controlId="formBasicEmail"
					>
						<Form.Label>Salasana</Form.Label>
						<Form.Control type="password" placeholder="" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Button onClick={() => login()} className="w-100">
						Rekisteröidy
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default RegisterPage;
