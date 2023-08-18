import css from "./Button.module.css";

import { ComponentProps, type ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	variant: "text" | "blackWhite";
	children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "text",
	children,
	...props
}) => {
	return <button {...props}>{children}</button>;
};
