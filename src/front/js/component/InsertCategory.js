import React, { Component, useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const insertCategory = () => {
	const [id_Category, setId_Category] = useState("");
	const [name_Category, setName_Category] = useState("");
	const [description_Category, setDescription_Category] = useState("");
	const [active_Product, setActive_Product] = useState("");

	const update = data => {
		setId_Category(data.id_Provider);
		setName_Category(data.name_Provider);
		setDescription_Category(data.properties[0].email_Provider_Details);
	};
	const handleUpdate = e => {
		e.preventDefault();
		if (id_Category === "" || name_Category === "" || description_Category === "") {
			alert("Existen campos vacios");
		} else {
			const data = {
				id_Category: id_Category,
				name_Category: name_Category,
				description_Category: description_Category,
				active_Product: true
			};
			actions.updateCategory(data);

			setId_Category("");
			setName_Category("");
			setDescription_Category("");
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (id_Category === "" || name_Category === "" || description_Category === "") {
			alert("Existen campos vacios");
		} else {
			const data = {
				id_Category: id_Category,
				name_Category: name_Category,
				description_Category: description_Category,
				active_Provider: true
			};
			actions.insertData(data);
		}
	};
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadCategory();
	}, []);

	return (
		!!store.providers && (
			<div>
				<Card body>
					<Row>
						<Col sm="12" md="6">
							<Form>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Nombre:</Form.Label>
										<Form.Control
											size="sm"
											type="text"
											placeholder=""
											value={id_Category}
											onChange={e => setId_Category(e.target.value)}
										/>
										<Form.Text className="text-muted" />
									</Form.Group>
									<Form.Group as={Col}>
										<Form.Label>Descripción:</Form.Label>
										<Form.Control
											size="sm"
											type="text"
											placeholder=""
											value={name_Category}
											onChange={e => setName_Category(e.target.value)}
										/>
										<Form.Text className="text-muted" />
									</Form.Group>
								</Form.Row>
								<Button size="sm" variant="primary" type="submit">
									Submit
								</Button>
								<Button
									size="sm"
									variant="primary"
									type="button"
									onClick={() => {
										handleUpdate();
									}}>
									Update
								</Button>
							</Form>
						</Col>
					</Row>
				</Card>

				<Row>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Id Categoria</th>
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{store.providers.map((item, i) => {
								return (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{store.category[i].id_Category}</td>
										<td>{store.category[i].name_Category}</td>
										<td>{store.category[i].description_Category}</td>
										<td>{store.category[i].active_Product}</td>
										<td>
											<i className="fas fa-pen" />
											onClick=
											{() => {
												update(item);
											}}
										</td>
										<td>
											<i className="fas fa-trash-alt" />
											onClick=
											{() => {
												actions.eliminateCategory(item);
											}}
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Row>
			</div>
		)
	);
};
