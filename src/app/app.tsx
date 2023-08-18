import React from "react";
import ReactDOM from "react-dom/client";
import { withProvider } from "./providers";
import { Routing } from "./routing";
import "../shared/base.css";

const root = document.getElementById("root") as HTMLElement;

const App = withProvider(() => <Routing />);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
