import css from "./Catalog.module.css";

import { useAppSelector } from "shared/model";

import { Headphone, Product } from "entities/product";
import { ProductInCartCounter } from "features/productCounter";
import { cartItemsSelector } from "entities/cart";
import { isAuthSelector } from "entities/user";

import { AddToCartButton } from "features/addToCart";

interface CatalogProps {
	title: string;
	items: Headphone[];
}

export const Catalog: React.FC<CatalogProps> = ({ title, items }) => {
	const isAuth = useAppSelector(isAuthSelector);
	const cartItems = useAppSelector(cartItemsSelector);

	const createBottomSlot = (currentProduct: Headphone) => {
		const existItem = cartItems.find(
			(item) => item._id === currentProduct._id
		);
		if (existItem) {
			return <ProductInCartCounter product={existItem} />;
		}
		return <AddToCartButton item={currentProduct} />;
	};

	return (
		<div className={css.catalog}>
			<h2 className={css.title}>{title}</h2>
			<div className={css.content}>
				{items.map((item) => (
					<Product
						key={item._id}
						item={item}
						bottomSlot={isAuth ? createBottomSlot(item) : undefined}
					/>
				))}
			</div>
		</div>
	);
};
