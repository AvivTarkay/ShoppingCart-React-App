import React from "react";

import Product from "./product/Product";
import { connect } from "react-redux";

const Products = ({ products, removeNav }) => {
	return (
		<div className="allProducts">
			{React.Children.toArray(
				products.map(product => (
					<Product productData={product} removeNav={removeNav} />
				))
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		products: state.shop.products,
	};
};
export default connect(mapStateToProps)(Products);
