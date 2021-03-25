import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Img from "../../img/image (6).png";

export const Histories = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-5 border-top border-bottom border-secondary">
			<div className="row">
				<div className="col-sm">
					<div className="first-heading-img">
						<img src={Img} className="rounded-circle" alt="..." />
					</div>
				</div>
				<div className="col-sm text-history">
					<div className="first-heading-text">
						<h4 className="text-f-history">
							Obtenga informes e información
							<span className="text-muted"> en tiempo real</span>
						</h4>
						<p>
							<i className="fas fa-burn lista-history" /> Tome decisiones empresariales más inteligentes
							con un análisis potente en tiempo real.
						</p>
						<p>
							<i className="fas fa-burn lista-history" /> Mida y gestione el rendimiento de ventas de su
							organización en todo el territorio.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
