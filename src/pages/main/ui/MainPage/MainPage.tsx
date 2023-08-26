import css from "./MainPage.module.css";

import { useEffect } from "react";

import { getHeadphonesAsync } from "entities/product";
import { Catalog } from "widgets/catalog";
import {
	wiredHeadphonesSelector,
	wirelessHeadphonesSelector,
} from "entities/product";
import { useAppSelector, useAppDispatch } from "shared/model";

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const wiredHeadphones = useAppSelector(wiredHeadphonesSelector);
	const wirelessHeadphones = useAppSelector(wirelessHeadphonesSelector);

	useEffect(() => {
		dispatch(getHeadphonesAsync());
	}, []);

	return (
		<div className={css.main}>
			<Catalog title="Наушники" items={wiredHeadphones} />
			<Catalog title="Беспроводные наушники" items={wirelessHeadphones} />
		</div>
	);
};
