import React, { Component, useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Jumbotron, Button, Card, Image, Col, Row, Form, Link, Dropdown, Table } from "react-bootstrap";
import "../../styles/addProduct.scss";

export const AddProduct = () => {
	const [id_Product, setId_Product] = useState("");
	const [id_Provider, setId_Provider] = useState("");
	const [id_Category, setId_Category] = useState("");
	const [name_Product, setName_Product] = useState("");
	const [trade_Product_Details, setTrade_Product_Details] = useState("");
	const [id_trade_Product_Details, setId_Trade_Product_Details] = useState("");
	const [tax_Product_Details, setTax_Product_Details] = useState("");
	const [description_Product_Details, setDescription_Product_Details] = useState("");
	const [price_In_Product_Details, setPrice_In_Product_Details] = useState("");
	const [profit_Product_Details, setProfit_Product_Details] = useState("");
	const [price_Out_Product_Details, setPrice_Out_Product_Details] = useState("");
	const [discount_Product_Details, setDiscount_Product_Details] = useState("");

	const update = data => {
		console.log(data);
		setId_Product(data.id_Product);
		setId_Provider(data.id_Provider);
		setId_Category(data.id_Category);
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
			id_Provider === "" ||
			id_Category === "" ||
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
				id_Provider: id_Provider,
				id_Category: id_Category,
				name_Product: name_Product,
				trade_Product_Details: trade_Product_Details,
				tax_Product_Details: tax_Product_Details,
				description_Product_Details: description_Product_Details,
				price_In_Product_Details: price_In_Product_Details,
				profit_Product_Details: profit_Product_Details,
				price_Out_Product_Details: price_Out_Product_Details,
				discount_Product_Details: discount_Product_Details,
				active_Product: "Activo"
			};
			actions.updateProduct(data);

			setId_Product("");
			setId_Provider("");
			setId_Category("");
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
			id_Provider === "" ||
			id_Category === "" ||
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
				id_Provider: id_Provider,
				id_Category: id_Category,
				name_Product: name_Product,
				trade_Product_Details: trade_Product_Details,
				tax_Product_Details: tax_Product_Details,
				description_Product_Details: description_Product_Details,
				price_In_Product_Details: price_In_Product_Details,
				profit_Product_Details: profit_Product_Details,
				price_Out_Product_Details: price_Out_Product_Details,
				discount_Product_Details: discount_Product_Details,
				active_Product: "Activo"
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
	console.log(store.products);
	console.log(store.category);

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
									value={name_Product}
									onChange={e => setName_Product(e.target.value)}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Marca"
									value={trade_Product_Details}
									onChange={e => setTrade_Product_Details(e.target.value)}
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
									value={id_Product}
									onChange={e => setId_Product(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<ARREGLAR: asociar con proveedor */}
							<Form.Group as={Col}>
								<Form.Label>Proveedor</Form.Label>
								<Form.Control
									as="select"
									className="dropdown-provider"
									value={id_Provider}
									onChange={e => setId_Provider(e.target.value)}>
									{!!store.providers &&
										store.providers.map((item, i) => {
											return (
												<option key={i} value={store.providers[i].id_Provider}>
													{store.providers[i].name_Provider}
												</option>
											);
										})}
								</Form.Control>
							</Form.Group>
							{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<ARREGLAR: asociar con categoría */}
							<Form.Group as={Col}>
								<Form.Label>Categoría</Form.Label>
								<Form.Control
									as="select"
									className="dropdown-category"
									value={id_Category}
									onChange={e => setId_Category(e.target.value)}>
									{!!store.category &&
										store.category.map((item, i) => {
											return (
												<option key={i} value={store.category[i].id_Category}>
													{store.category[i].name_Category}
												</option>
											);
										})}
								</Form.Control>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label>Impuesto</Form.Label>
								<Form.Control
									as="select"
									className="dropdown-tax"
									value={tax_Product_Details}
									onChange={e => setTax_Product_Details(e.target.value)}>
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
									value={profit_Product_Details}
									onChange={e => setProfit_Product_Details(e.target.value)}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Descuento"
									value={discount_Product_Details}
									onChange={e => setDiscount_Product_Details(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Precio de costo"
									value={price_In_Product_Details}
									onChange={e => setPrice_In_Product_Details(e.target.value)}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									placeholder="Precio de venta"
									value={price_Out_Product_Details}
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
											<td>
												<h6>{i + 1}</h6>
											</td>
											<td>
												<h6>{store.products[i].id_Product}</h6>
											</td>
											<td>
												<h6>{store.products[i].name_Product}</h6>
											</td>
											<td>
												<h6>{item.properties[0].price_In_Product_Details}</h6>
											</td>
											<td>
												<h6>{item.properties[0].tax_Product_Details}</h6>
											</td>
											<td>
												<h6>{item.properties[0].price_Out_Product_Details}</h6>
											</td>
											<td>
												<i
													className="fas fa-pen symbol-fontawesome"
													onClick={() => {
														update(item);
													}}
												/>
											</td>
											<td>
												<i
													className="fas fa-trash-alt symbol-fontawesome"
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
