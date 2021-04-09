import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";
import Cart from "./component/Cart/Cart";
import SingleItem from "./component/Single_item/SingleItem";

function App({ current }) {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Products} />
					<Route exact path="/cart" component={Cart} />
					{!current ? (
						<Redirect to="/" />
					) : (
						<Route exact path="/Product/:id" component={SingleItem} />
					)}
				</Switch>
			</div>
		</Router>
	);
}

const mapStateToProps = state => {
	return {
		current: state.shop.currentItem,
	};
};

export default connect(mapStateToProps)(App);
