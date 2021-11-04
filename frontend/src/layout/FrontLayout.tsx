// import HeaderComp from "components/HeaderComp";
import React from "react";
import FooterComp from "../components/FooterComp";

const FrontLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<div className="front">
			<div className="front-main">
			{/* <HeaderComp /> */}
				{children}
				</div>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
