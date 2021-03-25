import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<i className=" style fas fa-dolly-flatbed" />
				<div className="brand-ri">
					<div href="">Bazzar</div>
					<span>Libera tu potencial de crecimiento</span>
				</div>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className=" links ml-auto">
					<Nav.Link className="navs" href="#features">
						Products |
					</Nav.Link>
					<Nav.Link className="navs" href="#pricing">
						Provider |
					</Nav.Link>

					<Nav.Link className="navs" href="#features">
						Inventory |
					</Nav.Link>
					<Nav.Link className="navs" href="#pricing">
						Admin |
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
