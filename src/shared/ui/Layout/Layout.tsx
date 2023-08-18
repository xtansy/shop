import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

interface LayoutProps {
	header: ReactNode;
	footer: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ header, footer }) => {
	return (
		<div className={css.root}>
			{header}
			<div className={css.content}>
				<Outlet />
			</div>
			{footer}
		</div>
	);
};
