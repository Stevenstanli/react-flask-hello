import React from "react";
import { Jumbotron, Button, Card, Image, Col, Row, Form, Link } from "react-bootstrap";
import "../../styles/addProduct.scss";

export const AddProduct = () => {
	return (
		<Jumbotron className="jumbotronCSS">
			<h1>Registro de productos</h1>
			<Card body className="formBodyCard">
				<Row>
					<Col md={3}>
						<i className="fas fa-sign-in-alt" />
					</Col>
					<Col md={9} className="nombreMarcarCat">
						<Form>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Nombre" block />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Marca" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Categoría" />
							</Form.Group>
						</Form>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Form>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Presentación" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Impuesto" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Código" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Código Cabys" />
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control size="sm" type="text" placeholder="Proveedor" />
							</Form.Group>
						</Form>
					</Col>
					<Row className="buttonsCSS">
						<Col md={2}>
							<Button className="buttonGuardar" size="sm" variant="primary">
								Guardar
							</Button>
						</Col>
						<Col md={2}>
							<Button className="buttonEliminar" size="sm" variant="secondary">
								Eliminar
							</Button>
						</Col>
					</Row>
				</Row>
			</Card>
		</Jumbotron>
	);
};