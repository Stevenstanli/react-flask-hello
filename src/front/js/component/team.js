import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import team from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg";
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
							<img src={team} alt="Gaming Tournament" />
							<figcaption>
								<h4>
									Bruce <span> Wayne</span>
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
							<img src={team} alt="Gaming Tournament" />
							<figcaption>
								<h4>
									Clark <span> Kent</span>
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
							<img src={team} alt="Gaming Tournament" />
							<figcaption>
								<h4>
									Diana <span> Prince</span>
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
							<img src={team} alt="Gaming Tournament" />
							<figcaption>
								<h4>
									Lex <span> Luthor</span>
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
