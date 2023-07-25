import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Suspense from "./components/Suspense";
const Footer = React.lazy(() => import("./components/common/Footer"));
const Header = React.lazy(() => import("./components/common/Header"));
const Bookings = React.lazy(() => import("./pages/Bookings"));
const Home = React.lazy(() => import("./pages/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const TripPage = React.lazy(() => import("./pages/TripPage"));

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path="sign-up"
					element={
						<Suspense>
							<SignUp />
						</Suspense>
					}
				/>
				<Route
					path="sign-in"
					element={
						<Suspense>
							<SignIn />
						</Suspense>
					}
				/>
				<Route
					path="trip/:id"
					element={
						<Suspense>
							<TripPage />
						</Suspense>
					}
				/>
				<Route
					path="bookings"
					element={
						<Suspense>
							<Bookings />
						</Suspense>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
