import React, { Component, useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Jumbotron, Button, Card, Image, Col, Row, Form, Link, Dropdown, Table } from "react-bootstrap";
import "../../styles/addProduct.scss";

export const AddProduct = () => {
	const [id_Product, setId_Product] = useState("");
	const [name_Product, setName_Product] = useState("");
	const [trade_Product_Details, setTrade_Product_Details] = useState("");
	const [id_trade_Product_Details, setId_Trade_Product_Details] = useState("");
	const [image_Product_Details, setImage_Product_Details] = useState("");
	const [tax_Product_Details, setTax_Product_Details] = useState("");
	const [description_Product_Details, setDescription_Product_Details] = useState("");
	const [price_In_Product_Details, setPrice_In_Product_Details] = useState("");
	const [profit_Product_Details, setProfit_Product_Details] = useState("");
	const [price_Out_Product_Details, setPrice_Out_Product_Details] = useState("");
	const [discount_Product_Details, setDiscount_Product_Details] = useState("");

	const update = data => {
		console.log(data);
		setId_Product(data.id_Product);
		setName_Product(data.name_Product);
		setTrade_Product_Details(data.properties[0].trade_Product_Details);
		setTax_Product_Details(data.properties[0].tax_Product_Details);
		setDescription_Product_Details(data.properties[0].description_Product_Details);
		setPrice_In_Product_Details(data.properties[0].price_In_Product_Details);
		setProfit_Product_Details(data.properties[0].profit_Product_Details);
		setPrice_Out_Product_Details(data.properties[0].price_Out_Product_Details);
		setDiscount_Product_Details(data.properties[0].discount_Product_Details);
	};

	const handleUpdate = () => {
		if (
			id_Product === "" ||
			name_Product === "" ||
			trade_Product_Details === "" ||
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
				tax_Product_Details: tax_Product_Details,
				description_Product_Details: description_Product_Details,
				price_In_Product_Details: price_In_Product_Details,
				profit_Product_Details: profit_Product_Details,
				price_Out_Product_Details: price_Out_Product_Details,
				discount_Product_Details: discount_Product_Details,
				active_Product: "activo"
			};
			actions.updateProduct(data);

			setId_Product("");
			setName_Product("");
			setTrade_Product_Details("");
			setTax_Product_Details("");
			setDescription_Product_Details("");
			setPrice_In_Product_Details("");
			setProfit_Product_Details("");
			setPrice_Out_Product_Details("");
			setDiscount_Product_Details("");
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			id_Product === "" ||
			name_Product === "" ||
			trade_Product_Details === "" ||
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
				tax_Product_Details: tax_Product_Details,
				description_Product_Details: description_Product_Details,
				price_In_Product_Details: price_In_Product_Details,
				profit_Product_Details: profit_Product_Details,
				price_Out_Product_Details: price_Out_Product_Details,
				discount_Product_Details: discount_Product_Details,
				active_Product: "activo"
			};
			actions.insertProducts(data);
		}
	};
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadProducts();
		actions.loadProviders();
		actions.loadCategory();
	}, []);
	console.log(store.providers);

	return (
		!!store.products && (
			<Col>
				<Row className="general-row">
					<Form className="add-product-form" onSubmit={e => handleSubmit(e)}>
						<i className="fas fa-sign-in-alt add-product-symbol container-fluid" />
						<h2>Registro de productos</h2>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Nombre"
									className="set-name"
									value={name_Product}
									onChange={e => setName_Product(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Presentación"
									value={description_Product_Details}
									onChange={e => setDescription_Product_Details(e.target.value)}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Código"
									onChange={e => setId_Product(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<ARREGLAR: asociar con proveedor */}
							<Form.Group as={Col}>
								<Form.Control
									as="select"
									className="dropdown-provider"
									onChange={e => console.log(e.target.value)}>
									{!!store.providers &&
										store.providers.map((item, i) => {
											return (
												<option key={i} value={store.providers[i].id_Provider}>
													{store.providers[i].name_Provider}
												</option>
											);
										})}
								</Form.Control>
								<h3>{id_trade_Product_Details}</h3>
							</Form.Group>
							{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<ARREGLAR: asociar con categoría */}
							<Form.Group as={Col}>
								<Form.Control as="select" className="dropdown-category">
									<option>Categoría</option>
									<option>Bebidas</option>
									<option>Cuidado personal</option>
								</Form.Control>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									as="select"
									className="dropdown-tax"
									value={tax_Product_Details}
									onChange={e => setTax_Product_Details(e.target.value)}>
									<option>Impuesto</option>
									<option>0.2</option>
									<option>0.1</option>
									<option>0.13</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>
						{/* *********************************PROVEEDOR */}
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
									placeholder="Precio de venta"
									onChange={e => setPrice_Out_Product_Details(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Button block variant="success" type="submit" className="guardar-button">
									Guardar
								</Button>
							</Form.Group>
							<Form.Group as={Col}>
								<Button block variant="primary" type="submit" className="actualizar-button">
									Actualizar
								</Button>
							</Form.Group>
						</Form.Row>
					</Form>
				</Row>
				<Row>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Código</th>
								<th>Nombre</th>
								<th>Precio de costo</th>
								<th>Impuesto</th>
								<th>Precio de Venta</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{store.products.map((item, i) => {
								if (item.active_Product == "Activo") {
									return (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{store.products[i].id_Product}</td>
											<td>{store.products[i].name_Product}</td>
											<td>{item.products[0].price_In_Product_Details}</td>
											<td>{item.properties[0].tax_Product_Details}</td>
											<td>{item.products[0].price_Out_Product_Details}</td>
											<td>
												<i
													className="fas fa-pen"
													onClick={() => {
														update(item);
													}}
												/>
											</td>
											<td>
												<i
													className="fas fa-trash-alt"
													onClick={() => {
														actions.eliminateProduct(item);
													}}
												/>
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					</Table>
				</Row>
			</Col>
		)
	);
};
