import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Iframe from "react-iframe";
import Col from "react-bootstrap/Col";

export const Maps = () => {
	const { store, actions } = useContext(Context);

	return (
		<Col className="mapas-interno" md={12}>
			<div className="contacts-9">
				<div className="contacts-sub-9">
					<Iframe
						url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
						width="100%"
						height="450px"
						id="myId"
						className="myClassname"
						display="initial"
						position="relative"
					/>
				</div>
			</div>
		</Col>
	);
};
