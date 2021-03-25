import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../img/Screenshot_10.png";
import img2 from "../../img/Screenshot_11.png";
import img3 from "../../img/Screenshot_12.png";
import img4 from "../../img/Screenshot_13.png";
import img5 from "../../img/Screenshot_14.png";
import img6 from "../../img/Screenshot_4.png";
import img7 from "../../img/Screenshot_5.png";
import img8 from "../../img/Screenshot_6.png";
import img9 from "../../img/Screenshot_7.png";
import img10 from "../../img/Screenshot_8.png";
import img11 from "../../img/Screenshot_9.png";
import img12 from "../../img/Screenshot_28.png";

export const AppList = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div className="container">
				<Row>
					<Col md={4} className="header-content">
						<h3>Control de Inventarios</h3>
						<Image className="Image" src={img1} loading="lazy" />
						<Image className="Image" src={img3} loading="lazy" />
						<Image className="Image" src={img5} loading="lazy" />
					</Col>
					<Col md={4} className="header-content">
						<h3>Gestion de Finanzas</h3>

						<Image className="Image" src={img4} alt="Compra" loading="lazy" />
						<Image className="Image" src={img8} alt="Compra" loading="lazy" />
						<Image className="Image" src={img2} alt="Compra" loading="lazy" />
					</Col>

					<Col md={4} className="header-content">
						<h3>Gestion de Operaciones</h3>
						<Image className="Image" src={img7} alt="Compra" loading="lazy" />
						<Image className="Image" src={img9} alt="Compra" loading="lazy" />
						<Image className="Image" src={img8} alt="Compra" loading="lazy" />
					</Col>
				</Row>

				<Row>
					<Col md={3} className="header-content">
						<h3>Marketing Digital</h3>
						<Image className="Image" src={img6} alt="Compra" loading="lazy" />

						<Image className="Image" src={img12} alt="Compra" loading="lazy" />
					</Col>
					<Col md={3} className="header-content">
						<h3>Aplicativos Web</h3>
						<Image className="Image" src={img4} alt="Compra" loading="lazy" />
						<Image
							className="Image"
							src="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
							alt="Compra"
							loading="lazy"
						/>
					</Col>
					<Col md={3} className="header-content">
						<h3>Reportes</h3>
						<Image className="Image" src={img2} alt="Compra" loading="lazy" />
						<Image className="Image" src={img1} alt="Compra" loading="lazy" />
					</Col>
					<Col md={3} className="header-content">
						<h3>Soporte 24/7</h3>
						<Image className="Image" src={img6} alt="Compra" loading="lazy" />
						<Image className="Image" src={img9} alt="Compra" loading="lazy" />
					</Col>

					<Col md={12} className="header-content">
						<button className="btn btn-contact">Y mucho mas</button>
					</Col>
				</Row>
			</div>
		</Fragment>
	);
};
