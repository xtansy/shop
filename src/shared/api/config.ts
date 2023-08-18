interface ConfigAPI {
	baseUrl: string;
	paths: {
		headphones: {
			index: string;
		};
	};
}

export const config: ConfigAPI = {
	baseUrl: "http://localhost:8080/",
	paths: {
		headphones: {
			index: "/headphones/index",
		},
	},
};
