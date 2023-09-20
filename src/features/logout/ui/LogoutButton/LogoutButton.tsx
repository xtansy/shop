import { useAppDispatch } from "shared/model";
import { logoutAsync } from "entities/user";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
	const dispatch = useAppDispatch();

	const onClickLogout = () => {
		dispatch(logoutAsync());
	};

	return (
		<Link onClick={onClickLogout} to="/main">
			logout
		</Link>
	);
};
