import { type Headphone } from "entities/product/@x/cart";

export interface CartItem extends Headphone {
	count: number;
}

export interface CartModel {
	items: CartItem[];
}
