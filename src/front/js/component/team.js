import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import team1 from "../../img/Screenshot_24.png";
import team2 from "../../img/Screenshot_25.png";
import team3 from "../../img/Screenshot_26.png";
import team4 from "../../img/Screenshot_27.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const Team = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div className="team" id="team">
				<div className="container">
					<div className="grid">
						<figure className="effect-dexter" sm={12}>
							<img src={team1} alt="" />
							<figcaption>
								<h4>
									Steven <span> Espinoza</span>
								</h4>
								<ul className="social">
									<li>
										<a href="#" className="facebook" title="Go to Our Facebook Page" />
									</li>
									<li>
										<a href="#" className="twitter" title="Go to Our Twitter Account" />
									</li>
									<li>
										<a href="#" className="googleplus" title="Go to Our Google Plus Account" />
									</li>
								</ul>
							</figcaption>
						</figure>
						<figure className="effect-dexter">
							<img src={team2} alt="" />
							<figcaption>
								<h4>
									Sergio <span> Picado</span>
								</h4>
								<ul className="social">
									<li>
										<a href="#" className="facebook" title="Go to Our Facebook Page" />
									</li>
									<li>
										<a href="#" className="twitter" title="Go to Our Twitter Account" />
									</li>
									<li>
										<a href="#" className="googleplus" title="Go to Our Google Plus Account" />
									</li>
								</ul>
							</figcaption>
						</figure>
						<figure className="effect-dexter">
							<img src={team3} alt="" />
							<figcaption>
								<h4>
									Gerald <span> Aguilar</span>
								</h4>
								<ul className="social">
									<li>
										<a href="#" className="facebook" title="Go to Our Facebook Page" />
									</li>
									<li>
										<a href="#" className="twitter" title="Go to Our Twitter Account" />
									</li>
									<li>
										<a href="#" className="googleplus" title="Go to Our Google Plus Account" />
									</li>
								</ul>
							</figcaption>
						</figure>
						<figure className="effect-dexter">
							<img src={team4} alt="" />
							<figcaption>
								<h4>
									Kevin <span> Meza</span>
								</h4>
								<ul className="social">
									<li>
										<a href="#" className="facebook" title="Go to Our Facebook Page" />
									</li>
									<li>
										<a href="#" className="twitter" title="Go to Our Twitter Account" />
									</li>
									<li>
										<a href="#" className="googleplus" title="Go to Our Google Plus Account" />
									</li>
								</ul>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
