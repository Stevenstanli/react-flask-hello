import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<section className="w3l-contact-1">
			<div className="contacts-9 section-gap">
				<div className="wrapper">
					<h3 className="global-title text-center">Contactenos</h3>
					<div className="d-grid contact-view">
						<div className="cont-details">
							<div className="cont-top">
								<div className="cont-left text-center">
									<span className="fa fa-phone text-primary" />
								</div>
								<div className="cont-right">
									<h3>Llamenos</h3>
									<p>
										<a href="">+506 26 6378 4212</a>
									</p>
								</div>
							</div>
							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-envelope-o text-primary" />
								</div>
								<div className="cont-right">
									<h3>Correo Electronico</h3>
									<p>
										<a href="mailto:example@mail.com" className="mail">
											example@mail.com
										</a>
									</p>
								</div>
							</div>
							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-map-marker text-primary" />
								</div>
								<div className="cont-right">
									<h3>Direccion</h3>
									<p>San Jose, Costa Rica</p>
								</div>
							</div>
						</div>
						<div className="map-content-9">
							<form action="https://sendmail.w3layouts.com/submitForm" method="post">
								<div className="twice-two">
									<input
										type="text"
										className="form-control"
										name="w3lName"
										id="w3lName"
										placeholder="Nombre"
										required=""
									/>
									<input
										type="email"
										className="form-control"
										name="w3lSender"
										id="w3lSender"
										placeholder="Email"
										required=""
									/>
								</div>
								<div className="twice">
									<input
										type="text"
										className="form-control"
										name="w3lSubject"
										id="w3lSubject"
										placeholder="Asunto"
										required=""
									/>
								</div>
								<textarea
									name="w3lMessage"
									className="form-control"
									id="w3lMessage"
									placeholder="Escribanos"
									required=""></textarea>
								<button type="submit" className="btn btn-contact">
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
