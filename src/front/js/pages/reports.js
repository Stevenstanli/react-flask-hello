import React from "react";
import { ProductsByProviderReport } from "../component/productsByProviderReport";
import { Card, Accordion, Button, Badge, Link, Col, Row } from "react-bootstrap";

export const Reports = () => {
	return (
		<Col>
			<ProductsByProviderReport />
		</Col>
	);
};
