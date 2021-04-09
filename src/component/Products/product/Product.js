import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	addToCart,
	loadCurrentItem,
} from "../../../redux/shopping/ShoppingActions";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
	const containerOnMove = e => {
		//Movement Animation to happen
		const body = document.querySelector("body");
		body.classList.toggle("move");
		const card = document.querySelectorAll(".container");

		let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
		let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
		card.style = `transform:rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	};
	return (
		<div class="container" onMouseMove={containerOnMove}>
			<div className="card">
				<div className="sneaker">
					<div className="circle"></div>
					<img src={productData.img} alt={productData.id} />
				</div>

				<div className="info">
					<h1>{productData.title}</h1>
					<h3>{productData.description}</h3>
					<div className="sizes">
						<button>39</button>
						<button>40</button>
						<button className="active">42</button>
						<button>44</button>
					</div>
					<div className="purchase">
						<Link to={`/Product/${productData.id}`}>
							<button
								onClick={() => {
									loadCurrentItem(productData);
								}}
								className="detailsAddBtn"
							>
								View Item
							</button>
						</Link>
						<button
							onClick={() => {
								addToCart(productData.id);
							}}
							className="detailsAddBtn"
						>
							Add To Cart
						</button>
					</div>
				</div>
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
