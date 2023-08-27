import css from "./ProductInCartCounter.module.css";

import { useAppDispatch } from "shared/model";
import { type CartItem, addItem, minusItem } from "entities/cart";

interface ProductInCartCounterProps {
	product: CartItem;
	withSummary?: boolean;
}

export const ProductInCartCounter: React.FC<ProductInCartCounterProps> = ({
	product,
	withSummary,
}) => {
	const dispatch = useAppDispatch();

	const onClickPlus = () => {
		dispatch(addItem(product));
	};

	const onClickMinus = () => {
		dispatch(minusItem(product._id));
	};

	return (
		<div className={css.root} style={{ width: withSummary ? "100%" : "" }}>
			<div className={css.counter}>
				<div className={css.round} onClick={onClickMinus}>
					<div className={css.line}></div>
				</div>
				<div className={css.count}>{product.count}</div>
				<div className={css.round} onClick={onClickPlus}>
					<div className={`${css.line} ${css.lineTwo}`}></div>
					<div className={css.line}></div>
				</div>
			</div>
			{withSummary && (
				<div className={css.bottomPrice}>
					{product.price * product.count} ₽
				</div>
			)}
		</div>
	);
};
