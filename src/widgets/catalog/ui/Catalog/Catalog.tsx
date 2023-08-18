import css from "./Catalog.module.css";

import { Headphone, Product } from "entities/product";

interface CatalogProps {
	title: string;
	items: Headphone[];
}

export const Catalog: React.FC<CatalogProps> = ({ title, items }) => {
	return (
		<div className={css.catalog}>
			<h2 className={css.title}>{title}</h2>
			<div className={css.content}>
				{items.map((item) => (
					<Product item={item} />
				))}
			</div>
		</div>
	);
};
