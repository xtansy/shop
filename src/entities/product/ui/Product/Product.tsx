import css from "./Product.module.css";

import { Icon } from "shared/ui";
import { Headphone } from "entities/product";

interface ProductProps {
	item: Headphone;
}

export const Product: React.FC<ProductProps> = ({ item }) => {
	return (
		<div className={css.product}>
			<img src={item.img} alt="img" />
			<div className={css.info}>
				<div className={css.top}>
					<h4 className={css.name}>{item.title}</h4>
					<p className={css.price}>{item.price} ₽</p>
				</div>
				<div className={css.bottom}>
					<div className={css.bottomRate}>
						<Icon type="star" />
						<p className={css.rate}>{item.rate}</p>
					</div>
					<button>Купить</button>
				</div>
			</div>
		</div>
	);
};
