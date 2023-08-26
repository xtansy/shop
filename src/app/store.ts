import { configureStore } from "@reduxjs/toolkit";

import { headphoneModel } from "entities/product";
import { cartModel } from "entities/cart";

export const store = configureStore({
	reducer: {
		headphone: headphoneModel.reducer,
		cart: cartModel.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
