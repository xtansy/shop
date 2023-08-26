import css from "./Logo.module.css";

import { Link } from "react-router-dom";

export const Logo = () => (
	<Link to="/main">
		<h1 className={css.logo}>QPICK</h1>
	</Link>
);
