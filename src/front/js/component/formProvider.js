import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const FormProvider = () => (
	<div>
		<Card body>
			<Row>
				<Col sm="12" md="6" className="image">
					<Image src="https://via.placeholder.com/350x350" rounded />
				</Col>
				<Col sm="12" md="6">
					<Form>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Cedula Juridica o Fisica:</Form.Label>
								<Form.Control size="sm" type="text" placeholder="" />
								<Form.Text className="text-muted" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label>Nombre o Razon Social:</Form.Label>
								<Form.Control size="sm" type="text" placeholder="" />
								<Form.Text className="text-muted" />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo Electronico:</Form.Label>
							<Form.Control size="sm" type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col} controlId="exampleForm.ControlSelect1">
								<Form.Label>Tipo de Pago</Form.Label>
								<Form.Control size="sm" as="select">
									<option>Transferencia Bancaria</option>
									<option>Pago en Efectivo</option>
									<option>Pago con Cheque</option>
								</Form.Control>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label># Telefonico:</Form.Label>
								<Form.Control size="sm" type="text" placeholder="" />
								<Form.Text className="text-muted" />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Direccion:</Form.Label>
							<Form.Control size="sm" as="textarea" rows={3} />
						</Form.Group>

						<Button size="sm" variant="primary" type="submit">
							Submit
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
						<th>Identificacion</th>
						<th>Email</th>
						<th>Pago</th>
						<th>Modificar</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>Otto</td>
						<td>
							<i className="fas fa-pen" />
						</td>
						<td>
							<i className="fas fa-trash-alt" />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>
							<i className="fas fa-pen" />
						</td>
						<td>
							<i className="fas fa-trash-alt" />
						</td>
					</tr>
				</tbody>
			</Table>
		</Row>
	</div>
);