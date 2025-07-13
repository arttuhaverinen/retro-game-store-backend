import React from "react";
import { useContext } from "react";
import { Appcontext } from "../App";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import dice0 from "./images/Wii.png";

const Navigation = () => {
	const { appUserName, setAppUserName, appJsonToken, setAppJsonToken } =
		useContext(Appcontext);

	const handleLogout = () => {
		setAppUserName(null);
		setAppJsonToken(null);
		localStorage.removeItem("Token");
		localStorage.removeItem("jwt");
		localStorage.removeItem("username");
	};

	return (
		<Navbar expand="lg" style={{ backgroundColor: "black" }} className="mb-3">
			<Container className="">
				<Navbar.Brand>
					{" "}
					<Nav.Link>
						<Link className="links" to={"/"}>
							Koti
						</Link>
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto" style={{ margin: "auto" }}>
						<Nav.Link>
							<Link className="links" to={"/addProduct"}>
								Lisää ilmoitus
							</Link>
						</Nav.Link>
						{/*
						<Nav.Link>
							<Link className="links" to={"/settings"}>
								Asetukset
							</Link>
						</Nav.Link>
						*/}
						{appUserName !== "" && appUserName !== null ? (
							<>
								<Nav.Link>
									<Link className="links" to={"/OwnProducts"}>
										Omat ilmoitukset
									</Link>
								</Nav.Link>
							</>
						) : (
							<></>
						)}
						{appUserName !== "" && appUserName !== null ? (
							<>
								<Nav.Link>
									<Link
										onClick={() => handleLogout()}
										className="links"
										to={"/"}
									>
										Kirjaudu ulos
									</Link>
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link>
									<Link className="links" to={"/login"}>
										Kirjautuminen
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link className="links" to={"/register"}>
										Rekisteröinti
									</Link>
								</Nav.Link>
							</>
						)}
						<Nav.Link>
							{" "}
							<Link
								style={{
									border: "2px solid white",
									padding: "2px",
									borderRadius: "2px",
								}}
								className="links"
							>
								Kirjautunut käyttäjällä: {appUserName}
							</Link>{" "}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Navigation;
