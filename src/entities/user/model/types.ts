export interface User {
	_id: string;
	login: string;
}

export type UserModel =
	| {
			isAuth: true;
			isLoading: boolean;
			user: User;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			isAuth: false;
			user?: User;
			isLoading: boolean;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };
