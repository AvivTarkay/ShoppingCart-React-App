import * as actionTypes from "./ShoppingTypes";

const INITIAL_STATE = {
	products: [
		{
			id: 1,
			title: "Air Jordans 1 Chicago",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 140,
			img: "/images/jordan.png",
		},
		{
			id: 2,
			title: " Air Jordan 1 Mid GS ‘Pink Quartz’",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 220,
			img: "/images/PinkJordans.png",
		},
		{
			id: 3,
			title: "Air Jordan 5 Retro 'Stealth 2.0'",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 210,
			img: "/images/AirJordan5.png",
		},
		{
			id: 4,
			title: "Adidas Yeezy Boost 350 V2 Trfrm",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 120,
			img: "/images/Yeezy.png",
		},
		{
			id: 5,
			title: "Nike Air Max 270 React Casual Running Shoes",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 100,
			img: "/images/airMax.png",
		},
		{
			id: 6,
			title: " Chuck Taylor All Star Fresh",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 320,
			img: "/images/converse.png",
		},
		{
			id: 7,
			title: "Reebok CL Legacy X Assassins Creed",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 170,
			img: "/images/Reebok.png",
		},
		{
			id: 8,
			title: "Kendrick Lamar x Classic Leather GS D",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 250,
			img: "/images/Kendrick.png",
		},
		{
			id: 9,
			title: "Nike VaporMax",
			description: "Available 2/17 at 5:00 PMStep .",
			price: 290,
			img: "/images/nikeVapor.png",
		},
	], // {id, title, description, price, img}
	cart: [], //{id, title, description, price, img, quantity}
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			//get the items from the products array
			const item = state.products.find(
				product => product.id === action.payload.id
			);
			console.log(item);
			// check if item is already in cart
			const alreadyInCart = state.cart.find(item =>
				item.id === action.payload.id ? true : false
			);
			return {
				...state,
				cart: alreadyInCart
					? state.cart.map(item =>
							item.id === action.payload.id
								? { ...item, quantity: item.quantity + 1 }
								: item
					  )
					: [...state.cart, { ...item, quantity: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload.id),
			};
		case actionTypes.ADJUST_QUANTITY:
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload.id
						? { ...item, quantity: +action.payload.quantity }
						: item
				),
			};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
