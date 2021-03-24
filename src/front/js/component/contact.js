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
					<h3 className="global-title text-center">Contact us</h3>
					<div className="d-grid contact-view">
						<div className="cont-details">
							<div className="cont-top">
								<div className="cont-left text-center">
									<span className="fa fa-phone text-primary"></span>
								</div>
								<div className="cont-right">
									<h6>Call Us</h6>
									<p>
										<a href="tel:+44 99 555 42">+123 45 67 89</a>
									</p>
								</div>
							</div>
							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-envelope-o text-primary"></span>
								</div>
								<div className="cont-right">
									<h6>Email Us</h6>
									<p>
										<a href="mailto:example@mail.com" className="mail">
											example@mail.com
										</a>
									</p>
								</div>
							</div>
							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-map-marker text-primary"></span>
								</div>
								<div className="cont-right">
									<h6>Address</h6>
									<p>Address here, 208 Trainer Avenue street, Illinois, UK - 62617.</p>
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
										placeholder="Name"
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
										placeholder="Subject"
										required=""
									/>
								</div>
								<textarea
									name="w3lMessage"
									className="form-control"
									id="w3lMessage"
									placeholder="Message"
									required=""></textarea>
								<button type="submit" className="btn btn-contact">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
