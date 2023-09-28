import css from "./HeaderMenu.module.css";

import { Link } from "react-router-dom";

import { useAppSelector } from "shared/model";
import { isAuthSelector, userSelector } from "entities/user";
import { Icon } from "shared/ui";
import { LogoutButton } from "features/logout";

export const HeaderMenu = () => {
	const isAuth = useAppSelector(isAuthSelector);
	const user = useAppSelector(userSelector);

	if (!isAuth) {
		return (
			<div className={css.card}>
				<Link to="/login">login</Link>
			</div>
		);
	}

	return (
		<div className={css.card}>
			<h2>Hey, {user?.login}</h2>
			<LogoutButton />
			<Link to="/favorites">
				<Icon type="like" />
			</Link>
			<Link to="/cart">
				<Icon type="cart" />
			</Link>
		</div>
	);
};
