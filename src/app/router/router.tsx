import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import MainPage from "../../pages/mainPage/MainPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";
import ThreeCardPage from "../../pages/threeCardPage/ThreeCardPage";

export const router = createBrowserRouter([
{
	path: "/",
	Component: MainLayout,
	children: [
		{
			index: true,
			Component: MainPage,
		},
		{
			path: "login",
			Component: LoginPage,
			errorElement: <div>Error loading Login Page</div>
		},
		{
			path: "register",
			Component: RegisterPage,
			errorElement: <div>Error loading Register Page</div>
		},
		{
			path: "three-card",
			Component: ThreeCardPage,
			errorElement: <div>Error loading Three Card Page</div>
		},
	]
},
])