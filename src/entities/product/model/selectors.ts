import { createSelector } from "@reduxjs/toolkit";

export const headphonesSelector = (state: RootState) =>
	state.headphone.headphones;

export const headphonesIsLoadingSelector = (state: RootState) =>
	state.headphone.isLoading;

export const wirelessHeadphonesSelector = createSelector(
	headphonesSelector,
	(headphones) => headphones.filter((item) => item.type === "wireless")
);

export const wiredHeadphonesSelector = createSelector(
	headphonesSelector,
	(headphones) => headphones.filter((item) => item.type === "wired")
);
