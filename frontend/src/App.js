import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MainContent from "./components/MainContent";
import ProductSearch from "./components/ProductSearch";
import SettingsPage from "./components/SettingsPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsFound from "./components/ProductsFound";
import FollowedProducts from "./components/FollowedProducts";
import Fireb from "./Firebase";
import AddProductPage from "./components/AddProductPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import OwnProducts from "./components/OwnProducts";

export const Appcontext = createContext(null);

function App() {
	const [appUserName, setAppUserName] = useState(
		localStorage.getItem("username")
	);
	const [appJsonToken, setAppJsonToken] = useState(localStorage.getItem("jwt"));

	return (
		<Router>
			<Container style={{ margin: "0px", padding: "0px" }} fluid className="">
				<Appcontext.Provider
					value={{ appUserName, setAppUserName, appJsonToken, setAppJsonToken }}
				>
					<Navigation className="bg-success" />

					<Routes>
						{/*<Route path="/" element={<ProductSearch />} />*/}
						<Route path="/" element={<ProductsFound />} />
						<Route path="/settings" element={<SettingsPage />} />
						<Route path="/followedProducts" element={<FollowedProducts />} />
						<Route path="/addProduct" element={<AddProductPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/OwnProducts" element={<OwnProducts />} />
					</Routes>
					{/*<Footer className="bg-success" />*/}
				</Appcontext.Provider>
			</Container>
		</Router>
	);
}

export default App;
