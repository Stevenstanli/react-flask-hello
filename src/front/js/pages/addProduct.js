import React, { Component, useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Jumbotron, Button, Card, Image, Col, Row, Form, Link, Dropdown } from "react-bootstrap";
import "../../styles/addProduct.scss";

export const AddProduct = () => {
	const [id_Product, setId_Product] = useState("");
	const [name_Product, setName_Product] = useState("");
	const [trade_Product_Details, setTrade_Product_Details] = useState("");
	const [image_Product_Details, setImage_Product_Details] = useState("");
	const [tax_Product_Details, setTax_Product_Details] = useState("");
	const [description_Product_Details, setDescription_Product_Details] = useState("");
	const [price_In_Product_Details, setPrice_In_Product_Details] = useState("");
	const [profit_Product_Details, setProfit_Product_Details] = useState("");
	const [price_Out_Product_Details, setPrice_Out_Product_Details] = useState("");
	const [discount_Product_Details, setDiscount_Product_Details] = useState("");

	const update = data => {
		console.log(data);
		setId_Product(data.id_Provider);
		setName_Product(data.name_Product);
		setTrade_Product_Details(data.properties[0].trade_Product_Details);
		setImage_Product_Details(data.properties[0].image_Product_Details);
		setTax_Product_Details(data.properties[0].tax_Product_Details);
		setDescription_Product_Details(data.properties[0].description_Product_Details);
		setPrice_In_Product_Details(data.properties[0].price_In_Product_Details);
		setProfit_Product_Details(data.properties[0].profit_Product_Details);
		setPrice_Out_Product_Details(data.properties[0].price_Out_Product_Details);
		setDiscount_Product_Details(data.properties[0].discount_Product_Details);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			id_Product === "" ||
			name_Product === "" ||
			trade_Product_Details === "" ||
			image_Product_Details === "" ||
			tax_Product_Details === "" ||
			description_Product_Details === "" ||
			price_In_Product_Details === "" ||
			profit_Product_Details === "" ||
			price_Out_Product_Details === "" ||
			discount_Product_Details === ""
		) {
			alert("Existen campos vacios");
		} else {
			const data = {
				id_Product: id_Product,
				name_Product: name_Product,
				trade_Product_Details: trade_Product_Details,
				image_Product_Details: image_Product_Details,
				tax_Product_Details: tax_Product_Details,
				description_Product_Details: description_Product_Details,
				price_In_Product_Details: price_In_Product_Details,
				profit_Product_Details: profit_Product_Details,
				price_Out_Product_Details: price_Out_Product_Details,
				discount_Product_Details: discount_Product_Details,
				active_Product: "activo"
			};
			actions.insertData(data);
		}
	};
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadProviders();
	}, []);

	return (
		<Form className="add-product-form" onSubmit={e => handleSubmit(e)}>
			<i className="fas fa-sign-in-alt add-product-symbol" />
			<h2>Registro de productos</h2>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Control type="text" placeholder="Nombre" onChange={e => setName_Product(e.target.value)} />
				</Form.Group>
				<Form.Group as={Col}>
					<Dropdown>
						<Dropdown.Toggle variant="" id="dropdown-basic" className="dropdown-category">
							Categoría
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item className="dropdown-category" href="#/action-1">
								Action
							</Dropdown.Item>
							<Dropdown.Item className="dropdown-category" href="#/action-2">
								Another action
							</Dropdown.Item>
							<Dropdown.Item className="dropdown-category" href="#/action-3">
								Something else
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Presentación"
						onChange={e => setDescription_Product_Details(e.target.value)}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Identificador"
						onChange={e => setId_Product(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Control type="text" placeholder="Proveedor" />
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Descuento"
						onChange={e => setDiscount_Product_Details(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Precio de costo"
						onChange={e => setPrice_In_Product_Details(e.target.value)}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Impuesto"
						onChange={e => setTax_Product_Details(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="% Ganancia"
						onChange={e => setProfit_Product_Details(e.target.value)}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type="text"
						placeholder="Precio de venta"
						onChange={e => setPrice_Out_Product_Details(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>
			<Button block variant="primary" type="submit" className="guardar-button">
				Guardar
			</Button>
		</Form>
	);
};
