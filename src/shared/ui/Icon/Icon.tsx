import css from "./Icon.module.css";

export type IconType = "like" | "cart" | "star";

interface IconProps {
	type: IconType;
}

export const Icon: React.FC<IconProps> = ({ type }) => {
	return (
		<div
			style={{ backgroundImage: `url("/svg/${type}.svg")` }}
			className={css.icon}
		></div>
	);
};
