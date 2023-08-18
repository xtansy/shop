import { Routes, Route } from "react-router-dom";
import { MainPage } from "pages/main";
import { Layout } from "shared/ui/";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { ProfileCard } from "widgets/profile-card";

export const Routing = () => {
	return (
		<Routes>
			<Route
				element={
					<Layout
						header={<Header rightSlot={<ProfileCard />} />}
						footer={<Footer />}
					/>
				}
			>
				<Route path="/main" element={<MainPage />} />
			</Route>
		</Routes>
	);
};
