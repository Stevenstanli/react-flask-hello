import React, { Component } from "react";
import imgFoot from "../../img/Screenshot_30.png";

import Image from "react-bootstrap/Image";

const fecha = new Date().getFullYear();
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Gerald Aguilar, Kevin Meza, Sergio Picado y Steven Mairena. &copy;
			{fecha}
		</p>
		<p>
			<Image className="Image" src={imgFoot} loading="lazy" />
		</p>
	</footer>
);
