import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Img from "../../img/image (7).png";

export const HistoriesIz = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-5 border-top border-bottom border-secondary">
			<div className="row">
				<div className="col-sm text-history">
					<div className="first-heading-text">
						<h4 className="text-f-history">
							Manténgase al tanto de
							<span className="text-muted"> los números</span>
						</h4>
						<p>
							<i className="fas fa-burn lista-history"></i> Realice un seguimiento de los indicadores
							clave de rendimiento (KPI), incluidos los pronósticos futuros y las tendencias actuales.
						</p>
						<p>
							<i className="fas fa-burn lista-history"></i> Mida la eficacia de la comunicación con sus
							clientes y encuentre el momento y el canal perfectos para comunicarse con ellos.
						</p>
					</div>
				</div>
				<div className="col-sm">
					<div className="first-heading-img">
						<img src={Img} className="rounded-circle" alt="..." />
					</div>
				</div>
			</div>
		</div>
	);
};
