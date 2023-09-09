import css from "./HeaderMenu.module.css";

import { Link } from "react-router-dom";

import { useAppSelector } from "shared/model";
import { isAuthSelector } from "entities/user";
import { Icon } from "shared/ui";

export const HeaderMenu = () => {
	const isAuth = useAppSelector(isAuthSelector);

	if (!isAuth) {
		return (
			<div className={css.card}>
				<Link to="/login">login</Link>
			</div>
		);
	}

	return (
		<div className={css.card}>
			<h2>LOGOUT</h2>
			<Link to="/main">
				<Icon type="like" />
			</Link>
			<Link to="/cart">
				<Icon type="cart" />
			</Link>
		</div>
	);
};
