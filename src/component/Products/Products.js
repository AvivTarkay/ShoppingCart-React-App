import React from "react";
import "./Products.css";

import Product from "./product/Product";
import { connect } from "react-redux";

const Products = ({ products }) => {
	return (
		<div className="allProducts">
			{products.map(product => (
				<Product key={product.id} productData={product} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		products: state.shop.products,
	};
};
export default connect(mapStateToProps)(Products);
