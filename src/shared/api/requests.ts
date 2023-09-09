import { api } from "./instance";
import { config } from "./config";
import { HeadphoneDto, RefreshResponse, Response } from "./types";

const { paths } = config;

export const getHeadphones = async () => {
	const { data } = await api.get<Response<HeadphoneDto[]>>(
		paths.headphones.index
	);
	return data.data;
};

export const refreshTokens = async () => {
	const { data } = await api.get<Response<RefreshResponse>>(
		paths.user.refresh
	);
	return data.data;
};
