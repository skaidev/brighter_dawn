import HeaderComp from "components/HeaderComp";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<div>
			<HeaderComp />
			{children}
		</div>
	);
};

export default DashboardLayout;
