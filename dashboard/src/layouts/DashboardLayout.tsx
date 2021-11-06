import HeaderComp from "components/HeaderComp";
import SidebarComp from "components/SidebarComp";
import React from "react";
import styled from "styled-components";

const DashboardLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<Wrapper>
			<HeaderComp />
			<div className="main">
				<SidebarComp />
				<main className="main-view">{children}</main>
			</div>
		</Wrapper>
	);
};

export default DashboardLayout;

const Wrapper = styled.div`
	.main {
		display: flex;
		&-aside {
			margin-top: 1rem;
		}
		&-view {
			flex: 1;
		}
	}
`;
