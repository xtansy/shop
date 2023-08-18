import css from "./Footer.module.css";

import { Logo } from "shared/ui";

export const Footer = () => {
	return (
		<div className={css.footer}>
			<Logo />
			<div>
				<ul className={css.links}>
					<li className={css.link}>Израбнное</li>
					<li className={css.link}>Корзина</li>
					<li className={css.link}>Контакты</li>
				</ul>
			</div>
			<div className={css.settings}>
				<p className={css.link}>Условия сервиса</p>
				<div>
					<ul className={css.languages}>
						<li>Рус</li>
						<li>Eng</li>
					</ul>
				</div>
			</div>
			<div>
				<ul className={css.socials}>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</div>
		</div>
	);
};
