import * as actionTypes from "./ShoppingTypes";

const INITIAL_STATE = {
	products: [
		{
			id: 1,
			title: "air-jordan",
			description:
				"Available 2/17 at 5:00 PMStep into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain.",
			price: 140,
			img:
				"https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 2,
			title: "adidas",
			description:
				"Available 2/17 at 5:00 PMStep into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain.",
			price: 120,
			img:
				"https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fHNob2VzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 3,
			title: "nike",
			description:
				"Available 2/17 at 5:00 PMStep into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain.",
			price: 100,
			img:
				"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 4,
			title: "converse",
			description:
				"Available 2/17 at 5:00 PMStep into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain.",
			price: 80,
			img:
				"https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
