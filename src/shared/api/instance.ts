import axios from "axios";

import { config } from "./config";

export interface Response {
	message: string;
	data: unknown;
}

export const api = axios.create({
	baseURL: config.baseUrl,
});
