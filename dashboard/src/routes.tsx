import AttendanceLayout from "layouts/AttendanceLayout";
import MessageLayout from "layouts/MessageLayout";
import ProfileLayout from "layouts/ProfileLayout";
import StudentLayout from "layouts/StudentLayout";
import TakeAttendComp from "pages/attendance";
import ViewAttend from "pages/attendance/ViewAttend";
import MessagesPage from "pages/messages";
import SingleMessagePage from "pages/messages/[id]";
import ProfilePage from "pages/profile";
import StudentsPage from "pages/students";
import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages";
import LoginPage from "./pages/login";

interface IProp {
	component: React.ElementType;
	layout: React.ElementType;
	path?: string;
	exact?: boolean;
	isAuth?: boolean;
	proctected: boolean;
}

const AppRoutes = ({
	component: Component,
	layout: Layout,
	isAuth,
	proctected,
	...rest
}: IProp) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (proctected) {
					if (isAuth) {
						return (
							<Layout>
								<Component {...props} />
							</Layout>
						);
					} else {
						return <Redirect to="/login" />;
					}
				} else {
					return (
						<Layout>
							<Component {...props} />
						</Layout>
					);
				}
			}}
		/>
	);
};

const RouterComp = ({ isAuth }: { isAuth: boolean }): JSX.Element => (
	<Router>
		<Switch>
			<AppRoutes
				proctected={true}
				path="/"
				component={HomePage}
				exact
				layout={DashboardLayout}
				isAuth={isAuth}
			/>
			<AppRoutes
				proctected={false}
				path="/login"
				component={LoginPage}
				layout={DashboardLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/attendance"
				component={TakeAttendComp}
				layout={AttendanceLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/view"
				component={ViewAttend}
				layout={AttendanceLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/messages"
				component={MessagesPage}
				layout={MessageLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/singlemessage"
				component={SingleMessagePage}
				layout={MessageLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/profile"
				component={ProfilePage}
				layout={ProfileLayout}
				isAuth={false}
			/>
			<AppRoutes
				proctected={false}
				path="/students/**"
				component={StudentsPage}
				layout={StudentLayout}
				isAuth={false}
			/>
		</Switch>
	</Router>
);

export default RouterComp;
