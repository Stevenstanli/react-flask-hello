import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
	Jumbotron,
	Button,
	Card,
	Image,
	Figure,
	Col,
	Row,
	Badge,
	CardDeck,
	Form,
	ButtonGroup,
	Container,
	Accordion,
	ListGroup
} from "react-bootstrap";
import Link from "react-router-dom";
import { OrderCard } from "./orderCard";
import { OrderList } from "./orderList";
import "../../styles/productsByProvider.scss";

export const ProductsByProvider = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{!!store.providers &&
				store.providers.map((item, i) => {
					return (
						<Accordion key={i} defaultActiveKey="0">
							<Card className="second-accordion">
								{/* Segundo acordión: Nombre de proveedor */}
								<Accordion.Toggle as={Button} variant="link" eventKey="1">
									{store.providers[i].name_Provider}
								</Accordion.Toggle>
							</Card>
						</Accordion>
					);
				})}
		</div>
	);
};
