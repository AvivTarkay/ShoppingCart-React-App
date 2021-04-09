import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";
import Cart from "./component/Cart/Cart";
import SingleItem from "./component/Single_item/SingleItem";
import "./App.scss";

function App({ current }) {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Products />
					</Route>
					<Route exact path="/cart" component={Cart} />
					{!current ? (
						<Redirect to="/" />
					) : (
						<Route exact path="/Product/:id">
							<SingleItem />
						</Route>
					)}
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		current: state.shop.currentItem,
	};
};

export default connect(mapStateToProps)(App);
