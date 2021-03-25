import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "../../styles/register.scss";
import { Redirect } from "react-router-dom";

export function Login() {
	const { store, actions } = useContext(Context);
	const [name_User, setName_User] = useState("");
	const [password_User_Details, setPassword_User_Details] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (name_User === "" || password_User_Details === "") {
			alert("Existen campos vacios");
		} else {
			const data = {
				name_User: name_User,
				password_User_Details: password_User_Details,
				active_User: true
			};

			fetch("https://3001-pink-crane-guzshfxs.ws-us03.gitpod.io/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(response => response.json())
				.then(data => {
					console.log("Success:", data);
					sessionStorage.setItem("u_token", data.token);
					setRedirect(true);
				})
				.catch(error => {
					console.error("Error:", error);
				});
		}
	};

	return (
		<>
			<Row className="vh-100 align-items-center">
				<Col md={{ span: 6, offset: 3 }}>
					<Card bg="light" variant="light">
						<Card.Body>
							<i className="fas fa-user d-flex justify-content-center" />
							<Card.Title as="h3" className="text-center">
								Inicio Sesión
							</Card.Title>
							<Row>
								<Col md={{ span: 6, offset: 3 }}>
									<Form onSubmit={e => handleSubmit(e)}>
										<Form.Group as={Row} controlId="formHorizontalText">
											<Col sm={12}>
												<Form.Control
													type="text"
													placeholder="Usuario"
													onChange={e => setName_User(e.target.value)}
												/>
											</Col>
										</Form.Group>

										<Form.Group as={Row} controlId="formHorizontalPassword">
											<Col sm={12}>
												<Form.Control
													type="password"
													placeholder="Contraseña"
													onChange={e => setPassword_User_Details(e.target.value)}
												/>
											</Col>
										</Form.Group>

										<Form.Group as={Row}>
											<Col sm={{ span: 9, offset: 3 }}>
												<Button variant="light" type="submit">
													Olvidó la Contraseña?
												</Button>
											</Col>
										</Form.Group>

										<Form.Group as={Row}>
											<Col sm={{ span: 8, offset: 4 }}>
												<Button variant="secondary" type="submit">
													Iniciar Sesión
												</Button>
											</Col>
										</Form.Group>
									</Form>
									{redirect ? <Redirect to="/reports" /> : ""}
								</Col>
							</Row>

							<Row>
								<Col sm={{ span: 5, offset: 1 }}>
									<Button href="/" variant="light">
										Volver
									</Button>
								</Col>
								<Col sm={{ span: 4, offset: 2 }}>
									<Button
										variant="light"
										href="https://3000-pink-crane-guzshfxs.ws-us03.gitpod.io/register">
										Registrar nuevo Usuario
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}
