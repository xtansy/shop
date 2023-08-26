import { useAppDispatch } from "shared/model";
import { Button } from "shared/ui";
import { addItem } from "entities/cart";
import { Headphone } from "entities/product";

interface AddToCartButtonProps {
	item: Headphone;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
	const dispatch = useAppDispatch();

	const onClickAdd = () => {
		dispatch(addItem(item));
	};
	return <Button onClick={onClickAdd}>Купить</Button>;
};
