import React, { useState } from "react";

import { connect } from "react-redux";
import {
	removeFromCart,
	adjustQuantity,
} from "../../../redux/shopping/ShoppingActions";

const CartItem = ({ itemData, removeFromCart, adjustQuantity }) => {
	const [input, setInput] = useState(itemData.quantity);

	const onChangeHandler = e => {
		setInput(e.target.value);
		adjustQuantity(itemData.id, e.target.value);
	};
	return (
		<div className="cartItem">
			<img className="cartItemImage" src={itemData.img} alt={itemData.id} />
			<div className="cartItemDetails">
				<p className="detailsTitle">{itemData.title}</p>
				<p className="detailsDesc">{itemData.description}</p>
				<p className="detailsPrice">$ {itemData.price}</p>
			</div>
			<div className="cartItemActions">
				<div className="cartItemQty">
					<label htmlFor="qty">Qty</label>
					<input
						min="1"
						type="number"
						id="qty"
						name="qty"
						value={input}
						onChange={onChangeHandler}
					/>
				</div>
				<button
					className="actionsDeleteItemBtn"
					onClick={() => {
						removeFromCart(itemData.id);
					}}
				>
					<img
						src="https://image.flaticon.com/icons/svg/709/709519.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
		removeFromCart: id => dispatch(removeFromCart(id)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
