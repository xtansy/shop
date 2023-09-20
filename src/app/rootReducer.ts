import { headphoneModel } from "entities/product";
import { cartModel } from "entities/cart";
import { userModel } from "entities/user";

import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
	headphone: headphoneModel.reducer,
	cart: cartModel.reducer,
	user: userModel.reducer,
});
