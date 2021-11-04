import React from "react";

interface IProp {
	children: React.ReactChild;
}

const FrontLayout = ({ children }: IProp) => {
	return <div>{children}</div>;
};

export default FrontLayout;
