import css from "./CardList.module.css";

import { Headphone } from "entities/product/model/types";
import { Card } from "../Card/Card";

interface CardListProps {
	items: Headphone[];
	headphoneActionsSlot?: (id: Headphone["_id"]) => React.ReactNode;
	headphoneBottomSlot?: (id: Headphone["_id"]) => React.ReactNode;
}

export const CardList: React.FC<CardListProps> = ({
	items,
	headphoneActionsSlot,
	headphoneBottomSlot,
}) => {
	return (
		<div className={css.list}>
			{items.map((heaphone) => {
				return (
					<Card
						item={heaphone}
						actionSlot={
							headphoneActionsSlot
								? headphoneActionsSlot(heaphone._id)
								: undefined
						}
						bottomSlot={
							headphoneBottomSlot
								? headphoneBottomSlot(heaphone._id)
								: undefined
						}
					/>
				);
			})}
		</div>
	);
};
