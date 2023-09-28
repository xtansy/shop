import css from "./ProductList.module.css";

import { type Headphone } from "entities/product";

import { Product } from "entities/product";

interface ProductListProps {
	items: Headphone[];
	renderProductHeaderSlot?: (item: Headphone) => React.ReactNode;
	renderProductBottomSlot?: (item: Headphone) => React.ReactNode;
}

export const ProductList: React.FC<ProductListProps> = ({
	items,
	renderProductHeaderSlot,
	renderProductBottomSlot,
}) => {
	/**
	 * ✅ FSD Best practice
	 *
	 * Receive product actions (add to cart/favorites)
	 * to render-prop to avoid entity cross-import
	 */
	return (
		<div className={css.list}>
			{items.map((item) => {
				return (
					<Product
						item={item}
						headerSlot={
							renderProductHeaderSlot &&
							renderProductHeaderSlot(item)
						}
						bottomSlot={
							renderProductBottomSlot &&
							renderProductBottomSlot(item)
						}
					/>
				);
			})}
		</div>
	);
};
