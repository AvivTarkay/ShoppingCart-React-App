import { combineReducers } from "redux";
import shopReducer from "./shopping/ShoppingReducer";

const rootReducer = combineReducers({
	shop: shopReducer,
});

export default rootReducer;
