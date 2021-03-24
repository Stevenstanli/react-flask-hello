import React, { Component } from "react";

const fecha = new Date().getFullYear();
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>Gerald Aguilar, Kevin Meza, Sergio Picado y Steven Mairena. &copy;{fecha}</p>
	</footer>
);
