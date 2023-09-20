import { configureStore } from "@reduxjs/toolkit";

import { headphoneModel } from "entities/product";
import { cartModel } from "entities/cart";
import { userModel } from "entities/user";

export const store = configureStore({
	reducer: {
		headphone: headphoneModel.reducer,
		cart: cartModel.reducer,
		user: userModel.reducer,
	},
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
