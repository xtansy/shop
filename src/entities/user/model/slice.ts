import { createSlice } from "@reduxjs/toolkit";

import { type UserModel } from "./types";
import { loginAsync } from "./asyncThunk";

const initialState: UserModel = {
	isAuth: false,
	isLoading: false,
	errorMessage: null,
};

export const userModel = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginAsync.rejected, (state) => {
				state.isLoading = false;
				state.errorMessage = "Error with login";
			})
			.addCase(loginAsync.fulfilled, (state, { payload }) => {
				const { accessToken, ...user } = payload;
				localStorage.setItem("accessToken", accessToken);
				state.isLoading = false;
				state.user = user;
			});
	},
});
