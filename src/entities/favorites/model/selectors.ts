import { type Headphone } from "entities/product/@x/favorites";

import { createSelector } from "@reduxjs/toolkit";

export const favoritesItemsSelector = (state: RootState) =>
	state.favorites.items;

export const productInFavoritesSelector = createSelector(
	favoritesItemsSelector,
	(_: RootState, productId: Headphone["_id"]) => {
		return productId;
	},
	(items: Headphone[], productId: Headphone["_id"]) => {
		return items.find((item) => item._id === productId);
	}
);
