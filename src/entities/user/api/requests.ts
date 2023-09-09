import { type LoginProps, type LoginResponse } from "./types";
import { Response, config, api } from "shared/api";

export const login = async (props: LoginProps) => {
	const { data } = await api.post<Response<LoginResponse>>(
		config.paths.user.login,
		props
	);
	return data.data;
};
