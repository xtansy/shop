import { configureStore } from "@reduxjs/toolkit";

import { headphoneModel } from "entities/product";

export const store = configureStore({
	reducer: {
		headphone: headphoneModel.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
