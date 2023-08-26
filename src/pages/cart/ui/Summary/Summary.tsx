import css from "./Summary.module.css";

import { Button } from "shared/ui";

export const Summary = () => {
	return (
		<div className={css.summary}>
			<div className={css.content}>
				<div className={css.text}>Итого</div>
				<div className={css.price}>₽ 2 927</div>
			</div>
			<Button variant="blackWhite" className={css.summaryButton}>
				Перейти к оформлению
			</Button>
		</div>
	);
};
