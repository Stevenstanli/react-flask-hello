import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/arshad-pooloo-FK3s0hRpMNM-unsplash.jpg";
import "../../styles/home.scss";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Histories } from "../component/histories";
import { Header } from "../component/header";
import { AppList } from "../component/appList";
import { Team } from "../component/team";
import { Contact } from "../component/contact";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<Row>
				<Header />
			</Row>

			<Row className="apps title">
				<Col md={12}>
					<h1 className="header-content">Una aplicacion para cada necesidad</h1>
				</Col>
			</Row>
			<Row className="apps">
				<AppList />
			</Row>

			<Row className="history">
				<Histories />
			</Row>

			<Row className="cards">
				<Col md={12}>
					<h1 className="header-content">Desarrolladores</h1>
				</Col>
			</Row>
			<Team />
			<Contact />
		</Fragment>
	);
};
