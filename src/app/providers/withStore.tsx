import { Provider } from "react-redux";

import { store } from "../store";

export const withStore = (component: () => React.ReactNode) => () => {
	return <Provider store={store}>{component()}</Provider>;
};
