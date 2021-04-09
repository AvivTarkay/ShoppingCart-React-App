import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
	const [cartCount, srtCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		cart.forEach(item => {
			count += item.quantity;
		});
		srtCartCount(count);
	}, [cart, cartCount]);
	return (
		<div className="NavBar">
			<Link className="text_decoration" to="/">
				<h2 className="NavbarLogo">Redux Shopping Cart</h2>
			</Link>
			<Link className="text_decoration" to="/cart">
				<div className="NavCart">
					<h3 className="CartTitle">Cart</h3>
					<img
						className="CartImage"
						src="https://image.flaticon.com/icons/svg/102/102276.svg"
						alt="shopping cart"
					/>
					<div className="CartCounter">{cartCount}</div>
				</div>
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	};
};
export default connect(mapStateToProps)(Navbar);
