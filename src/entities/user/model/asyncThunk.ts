import { createAsyncThunk } from "@reduxjs/toolkit";
import { type LoginProps, type LoginResponse } from "../api/types";

import { login } from "../api/requests";

export const loginAsync = createAsyncThunk<LoginResponse, LoginProps>(
	"user/login",
	(props: LoginProps) => {
		return login(props);
	}
);
