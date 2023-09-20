import { createSlice } from "@reduxjs/toolkit";

import { type UserModel } from "./types";
import { loginAsync, logoutAsync } from "./asyncThunk";

const initialState: UserModel = {
	isAuth: false,
	isLoading: false,
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
			})
			.addCase(loginAsync.fulfilled, (state, { payload }) => {
				const { accessToken, ...user } = payload;
				localStorage.setItem("accessToken", accessToken);
				state.isLoading = false;
				state.user = user;
			})

			.addCase(logoutAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logoutAsync.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(logoutAsync.fulfilled, (state, { payload }) => {
				state.isAuth = false;
				state.isLoading = false;
				state.user = undefined;
				localStorage.removeItem("accessToken");
				console.log(payload);
			});
	},
});
