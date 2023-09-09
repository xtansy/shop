import { Routes, Route } from "react-router-dom";

import { Layout } from "shared/ui/";

import { MainPage } from "pages/main";
import { CartPage } from "pages/cart";
import { LoginPage } from "pages/login";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { HeaderMenu } from "widgets/headerMenu";

export const Routing = () => {
	return (
		<Routes>
			<Route
				element={
					<Layout
						header={<Header rightSlot={<HeaderMenu />} />}
						footer={<Footer />}
					/>
				}
			>
				<Route path="/main" element={<MainPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Route>
		</Routes>
	);
};
