import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/ShoppingActions";

const SingleItem = ({ current, addToCart }) => {
	const body = document.querySelector("body");

	const containerOnMove = e => {
		//Movement Animation to happen
		body.classList.toggle("move");
		const card = document.querySelector(".singleCard");
		let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
		let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
		card.style = `transform:rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	};
	//Animate In
	const containerOnEnter = () => {
		body.classList.toggle("enter");
	};
	//Animate Out
	const containerOnLeave = () => {
		body.classList.toggle("leave");
	};

	return (
		<div
			class="container"
			onMouseMove={containerOnMove}
			onMouseEnter={containerOnEnter}
			onMouseLeave={containerOnLeave}
		>
			<div className="singleCard">
				<div className="sneaker">
					<div className="circle"></div>
					<img src={current.img} alt={current.id} />
				</div>

				<div className="info">
					<h1>{current.title}</h1>
					<h3>{current.description}</h3>
					<div className="sizes">
						<button>39</button>
						<button>40</button>
						<button className="active">42</button>
						<button>44</button>
					</div>
					<div className="purchase">
						<button
							onClick={() => addToCart(current.id)}
							className="purchaseBtn"
						>
							Add To Cart
						</button>
						<Link to="/">
							<button className="purchaseBtn">Return</button>
						</Link>
					</div>
				</div>
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
