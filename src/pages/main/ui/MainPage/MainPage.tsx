import css from "./MainPage.module.css";

import { useEffect } from "react";

import { getHeadphonesAsync } from "entities/product";
import { Catalog } from "widgets/catalog";
import { useHeadphonesSelector } from "entities/product";
import { useAppSelector, useAppDispatch } from "shared/model";

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const headphones = useAppSelector(useHeadphonesSelector);

	useEffect(() => {
		dispatch(getHeadphonesAsync());
	}, []);

	return (
		<div className={css.main}>
			<Catalog title="Наушники" items={headphones} />
		</div>
	);
};
