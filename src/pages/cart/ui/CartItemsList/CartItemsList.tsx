import { type Headphone, CardList } from "entities/product";

interface ItemsListProps {
	items: Headphone[];
}

export const CartItemsList: React.FC<ItemsListProps> = ({ items }) => {
	return <CardList items={items} />;
};
