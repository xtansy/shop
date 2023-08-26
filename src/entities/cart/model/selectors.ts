export const cartItemsSelector = (state: RootState) => state.cart.items;

export const cartTotalPriceSelector = (state: RootState) =>
	state.cart.items.reduce((acum, item) => item.count * item.price + acum, 0);

export const cartItemsLengthSelector = (state: RootState) =>
	state.cart.items.length;
