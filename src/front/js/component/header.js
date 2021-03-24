import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export const Header = () => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron fluid>
			<Container className="header-jumbo">
				<div className="shawdow-ban">
					<span></span>
					<h1 className="">Se venden costuras a domicilio</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
					<button className="btn btn-danger">PRODUCTOS</button>
				</div>
			</Container>
		</Jumbotron>
	);
};
