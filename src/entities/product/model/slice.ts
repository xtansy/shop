import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getHeadphonesAsync } from "./asyncThunks";
import { Headphone, HeadphoneModel } from "./types";

const initialState: HeadphoneModel = {
	headphones: [],
	isLoading: false,
	errorMessage: null,
};

export const headphoneModel = createSlice({
	name: "headphone",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getHeadphonesAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getHeadphonesAsync.rejected, (state) => {
				state.isLoading = false;
				state.errorMessage = "Error with get of headphones";
			})
			.addCase(
				getHeadphonesAsync.fulfilled,
				(state, action: PayloadAction<Headphone[]>) => {
					state.isLoading = false;
					const payload = action.payload;
					state.headphones = payload;
				}
			);
	},
});

// export const {  } = headphoneModel.actions;
