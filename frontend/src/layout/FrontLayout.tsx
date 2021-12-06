// import HeaderComp from "components/HeaderComp";
import React from "react";
import styled from "styled-components";
import FooterComp from "../components/FooterComp";

const FrontLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<Wrapper className="front">
			<div className="front-main">{children}</div>
			<FooterComp />
		</Wrapper>
	);
};

export default FrontLayout;

const Wrapper = styled.div`
	display: flex;

	min-height: 100vh;
	flex-direction: column;
	.front-main {
		flex: 1;
	}
`;
