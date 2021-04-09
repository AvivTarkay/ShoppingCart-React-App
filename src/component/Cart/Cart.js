import React, { useState, useEffect } from "react";
import "./Cart.css";

import CartItem from "./Cart_item/CartItem";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);

	useEffect(() => {
		let price = 0;
		let items = 0;
		cart.forEach(item => {
			price += item.quantity * item.price;
			items += item.quantity;
		});
		setTotalPrice(price);
		setTotalQuantity(items);
	}, [cart, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity]);

	return (
		<div className="cart">
			<div className="cartItems">
				{cart.length !== 0 ? (
					cart.map(item => <CartItem key={item.id} itemData={item} />)
				) : (
					<h2>
						Dear shopper you need to add products to see them in your cart
					</h2>
				)}
			</div>
			<div className="cartSummary">
				<h4 className="classTitle">Cart Summary</h4>
				<div className="classPrice">
					<span>TOTAL: ({totalQuantity})</span>
					<span>${totalPrice} </span>
				</div>
				<button className="classCheckoutBtn">Proceed To Checkout</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	};
};
export default connect(mapStateToProps)(Cart);
