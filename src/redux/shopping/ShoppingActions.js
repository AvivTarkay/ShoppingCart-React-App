import * as actionTypes from "./ShoppingTypes";

export const addToCart = itemID => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: { id: itemID },
	};
};

export const removeFromCart = itemID => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: { id: itemID },
	};
};

export const adjustQuantity = (itemID, value) => {
	return {
		type: actionTypes.ADJUST_QUANTITY,
		payload: {
			id: itemID,
			quantity: value,
		},
	};
};

export const loadCurrentItem = item => {
	return {
		type: actionTypes.LOAD_CURRENT_ITEM,
		payload: item,
	};
};
