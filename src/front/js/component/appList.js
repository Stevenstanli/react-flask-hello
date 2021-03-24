import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const AppList = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div className="container">
				<Row>
					<Col md={4} className="header-content">
						<h3>Control de Inventarios</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
					<Col md={4} className="header-content">
						<h3>Gestion de Finanzas</h3>

						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>

					<Col md={4} className="header-content">
						<h3>Gestion de Operaciones</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
				</Row>

				<Row>
					<Col md={3} className="header-content">
						<h3>Marketing Digital</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
					<Col md={3} className="header-content">
						<h3>Aplicativos Web</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
					<Col md={3} className="header-content">
						<h3>Reportes</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
					<Col md={3} className="header-content">
						<h3>Soporte 24/7</h3>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>

					<Col md={12} className="header-content">
						<button className="btn btn-warning">Y mucho mas</button>
					</Col>
				</Row>
			</div>
		</Fragment>
	);
};
