import { api, Response } from "./instance";
import { config } from "./config";

const { paths } = config;

export const getHeadphones = async () => {
	const { data } = await api.get<Response>(paths.headphones.index);
	return data.data;
};
