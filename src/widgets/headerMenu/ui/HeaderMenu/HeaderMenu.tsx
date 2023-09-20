import css from "./HeaderMenu.module.css";

import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "shared/model";
import { isAuthSelector, userSelector, logoutAsync } from "entities/user";
import { Icon } from "shared/ui";

export const HeaderMenu = () => {
	const isAuth = useAppSelector(isAuthSelector);
	const user = useAppSelector(userSelector);
	const dispatch = useAppDispatch();

	if (!isAuth) {
		return (
			<div className={css.card}>
				<Link to="/login">login</Link>
			</div>
		);
	}

	const onClickLogout = () => {
		dispatch(logoutAsync());
	};

	return (
		<div className={css.card}>
			<h2>Hey, {user?.login}</h2>
			<h2 onClick={onClickLogout}>logout</h2>
			<Link to="/main">
				<Icon type="like" />
			</Link>
			<Link to="/cart">
				<Icon type="cart" />
			</Link>
		</div>
	);
};
