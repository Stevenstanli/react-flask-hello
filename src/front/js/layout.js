import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Provider } from "./pages/provider";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Changepass } from "./pages/changepass";
import { Newpass } from "./pages/newpass";
import { Single } from "./pages/single";
import { AddProduct } from "./pages/addProduct";
import { Reports } from "./pages/reports";
import injectContext from "./store/appContext";
import { Category } from "./pages/category";

import { Navigation } from "./component/navigation";

import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navigation />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/provider">
							<Provider />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/changepass">
							<Changepass />
						</Route>
						<Route exact path="/newpass">
							<Newpass />
						</Route>
						<Route exact path="/category">
							<Category />
						</Route>
						<Route exact path="/addproduct">
							<AddProduct />
						</Route>
						<Route exact path="/reports">
							<Reports />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
