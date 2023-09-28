import css from "./Product.module.css";

import { Icon } from "shared/ui";
import { type Headphone } from "entities/product/model/types";

interface ProductProps {
	item: Headphone;
	bottomSlot?: React.ReactNode;
	headerSlot?: React.ReactNode;
}

export const Product: React.FC<ProductProps> = ({
	item,
	bottomSlot,
	headerSlot,
}) => {
	return (
		<div className={css.product}>
			<div className={css.headerSlot}>{headerSlot && headerSlot}</div>
			<div className={css.imgBlock}>
				<img src={item.img} alt="img" />
			</div>
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
					{bottomSlot && bottomSlot}
				</div>
			</div>
		</div>
	);
};
