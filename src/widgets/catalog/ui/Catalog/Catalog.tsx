import css from "./Catalog.module.css";

import { useAppSelector } from "shared/model";

import { type Headphone, Product } from "entities/product";
import { isAuthSelector } from "entities/user";
import { productInCartSelector } from "entities/cart";

import { ProductInCartCounter } from "features/productCounter";
import { AddToCartButton } from "features/addToCart";
import { AddToFavIcon } from "features/addToFav";

interface CatalogProps {
	title: string;
	items: Headphone[];
}

interface BottomSlotProps {
	currentProduct: Headphone;
}

export const BottomSlot: React.FC<BottomSlotProps> = ({ currentProduct }) => {
	const existItem = useAppSelector((state) =>
		productInCartSelector(state, currentProduct._id)
	);

	return existItem ? (
		<ProductInCartCounter product={existItem} />
	) : (
		<AddToCartButton item={currentProduct} />
	);
};

export const Catalog: React.FC<CatalogProps> = ({ title, items }) => {
	const isAuth = useAppSelector(isAuthSelector);

	return (
		<div className={css.catalog}>
			<h2 className={css.title}>{title}</h2>
			<div className={css.content}>
				{items.map((item) => (
					<Product
						key={item._id}
						item={item}
						headerSlot={isAuth && <AddToFavIcon item={item} />}
						bottomSlot={
							isAuth && <BottomSlot currentProduct={item} />
						}
					/>
				))}
			</div>
		</div>
	);
};
