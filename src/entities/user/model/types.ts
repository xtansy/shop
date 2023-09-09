export interface User {
	_id: string;
	login: string;
}

export type UserModel =
	| {
			isAuth: true;
			isLoading: boolean;
			user: User;
			errorMessage: null | string;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			isAuth: false;
			user?: User;
			isLoading: boolean;
			errorMessage: null | string;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };
