import css from "./CardList.module.css";

import { Headphone } from "entities/product/model/types";
import { Card } from "../Card/Card";

interface CardListProps<T extends Headphone> {
	items: T[];
	headphoneActionsSlot?: (id: T["_id"]) => React.ReactNode;
	headphoneBottomSlot?: (product: T) => React.ReactNode;
}

export const CardList = <T extends Headphone>({
	items,
	headphoneActionsSlot,
	headphoneBottomSlot,
}: CardListProps<T>) => {
	return (
		<div className={css.list}>
			{items.map((headphone: T) => {
				return (
					<Card
						key={headphone._id}
						item={headphone}
						actionSlot={
							headphoneActionsSlot
								? headphoneActionsSlot(headphone._id)
								: undefined
						}
						bottomSlot={
							headphoneBottomSlot
								? headphoneBottomSlot(headphone)
								: undefined
						}
					/>
				);
			})}
		</div>
	);
};
