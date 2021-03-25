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
					<h1 className=""></h1>
					<p className="text-banner">
						Nuestra familia de aplicaciones funciona a la perfección, lo que te permite automatizar y
						rastrear todo lo que haces: centralizado, en línea y accesible desde cualquier lugar con
						cualquier dispositivo.
					</p>
					<button className=" btn-header btn btn-danger">Ver más</button>
				</div>
			</Container>
		</Jumbotron>
	);
};
