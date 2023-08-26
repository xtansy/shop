interface ConfigAPI {
	baseUrl: string;
	paths: {
		headphones: {
			index: string;
		};
		user: {
			refresh: string;
			register: string;
			login: string;
			logout: string;
		};
	};
}

export const config: ConfigAPI = {
	baseUrl: "http://localhost:8080/",
	paths: {
		headphones: {
			index: "/headphones/index",
		},
		user: {
			register: "/user/register",
			login: "/user/login",
			logout: "/user/logout",
			refresh: "/user/refresh",
		},
	},
};
