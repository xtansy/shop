import css from "./LoginPage.module.css";
import { LoginForm } from "features/login";

export const LoginPage = () => {
	return (
		<div className={css.root}>
			<h2 className={css.title}>Login page</h2>
			<LoginForm />
		</div>
	);
};
