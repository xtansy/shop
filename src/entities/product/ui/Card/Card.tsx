import css from "./Card.module.css";

import { type Headphone } from "entities/product/model/types";

interface CardProps {
	item: Headphone;
	actionSlot?: React.ReactNode;
	bottomSlot?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ item, actionSlot, bottomSlot }) => {
	return (
		<div className={css.card}>
			<div className={css.content}>
				<img className={css.img} src={item.img} alt="cardimg" />
				<div className={css.contentText}>
					<div className={css.title}>{item.title}</div>
					<div className={css.price}>{item.price}</div>
				</div>
			</div>
			<div className={css.bottom}>
				{bottomSlot && bottomSlot}
				<div className={css.bottomPrice}>{item.price}</div>
			</div>
			{actionSlot && <div className={css.actions}>{actionSlot}</div>}
		</div>
	);
};
