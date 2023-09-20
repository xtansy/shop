import { createSelector } from "@reduxjs/toolkit";
import { type CartItem } from "..";
import { type Headphone } from "entities/product";

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const cartTotalPriceSelector = (state: RootState) =>
	state.cart.items.reduce((acum, item) => item.count * item.price + acum, 0);

export const cartItemsLengthSelector = (state: RootState) =>
	state.cart.items.length;

export const productInCartSelector = createSelector(
	cartItemsSelector,
	(_: RootState, productId: Headphone["_id"]) => {
		return productId;
	},
	(cartItems: CartItem[], productId: Headphone["_id"]) => {
		return cartItems.find((item) => item._id === productId);
	}
);
