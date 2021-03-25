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
import { HistoriesIz } from "../component/historiesIz";
import { Header } from "../component/header";
import { AppList } from "../component/appList";
import { Team } from "../component/team";
import { Contact } from "../component/contact";
import { Maps } from "../component/map";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<Row>
				<Header></Header>
			</Row>

			<Row className="apps title">
				<Col md={12}>
					<h1 className="header-content">Una aplicacion para cada necesidad</h1>
				</Col>
			</Row>
			<Row className="apps">
				<AppList></AppList>
			</Row>

			<Row className="history">
				<Col md={10}>
					<Histories></Histories>
				</Col>
			</Row>
			<Row className="history justify-content-end">
				<Col md={10}>
					<HistoriesIz></HistoriesIz>
				</Col>
			</Row>

			<Row className="cards">
				<Col md={12}>
					<h1 className="header-content">Desarrolladores</h1>
				</Col>
			</Row>
			<Team></Team>
			<Contact></Contact>
			<Row className="mapas">
				<Maps></Maps>
			</Row>
		</Fragment>
	);
};
