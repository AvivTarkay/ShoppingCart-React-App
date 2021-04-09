import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import { connect } from "react-redux";
import {
	addToCart,
	loadCurrentItem,
} from "../../../redux/shopping/ShoppingActions";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
	return (
		<div className="product">
			<img
				className="productImage"
				src={productData.img}
				alt={productData.title}
			/>
			<div className="productDetails">
				<p className="detailsTitle">{productData.title}</p>
				<p className="detailsDesc">{productData.description}</p>
				<p className="detailsPrice">$ {productData.price}</p>
			</div>

			<div className="productButtons">
				<Link to={`/Product/${productData.id}`}>
					<button
						onClick={() => {
							loadCurrentItem(productData);
						}}
						className="buttonsBtn buttonsView"
					>
						View Item
					</button>
				</Link>
				<button
					onClick={() => {
						addToCart(productData.id);
					}}
					className="buttonsBtn buttonsAdd"
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addToCart: id => dispatch(addToCart(id)),
		loadCurrentItem: item => dispatch(loadCurrentItem(item)),
	};
};
export default connect(null, mapDispatchToProps)(Product);
