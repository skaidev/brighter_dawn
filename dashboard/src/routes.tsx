import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import TakeAttendComp from "pages/attendance";
import ViewAttend from "pages/attendance/ViewAttend";
import AttendanceLayout from "layouts/AttendanceLayout";
import MessagesPage from "pages/messages";
import MessageLayout from "layouts/MessageLayout";
import SingleMessagePage from "pages/messages/[id]";
import ProfileLayout from "layouts/ProfileLayout";
import ProfilePage from "pages/profile";
import StudentsPage from "pages/students";
import StudentLayout from "layouts/StudentLayout";

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
				path="/student"
				component={StudentsPage}
				layout={StudentLayout}
				isAuth={false}
			/>
		</Switch>
	</Router>
);

export default RouterComp;
