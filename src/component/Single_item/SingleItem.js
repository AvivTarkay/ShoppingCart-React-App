import React from "react";
import "./SingleItem.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/ShoppingActions";

const SingleItem = ({ current, addToCart }) => {
	return (
		<div className="singleItem">
			<img className="singleItemImage" src={current.img} alt={current.id} />
			<div className="singleItemDetails">
				<p className="detailsTitle">{current.title}</p>
				<p className="detailsDescription">{current.description}</p>
				<p className="detailsPrice">$ {current.price}</p>
				<button onClick={() => addToCart(current.id)} className="detailsAddBtn">
					Add To Cart
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		current: state.shop.currentItem,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addToCart: id => dispatch(addToCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
