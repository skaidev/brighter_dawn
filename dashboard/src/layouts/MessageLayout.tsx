import HeaderComp from 'components/HeaderComp';
import SidebarComp from 'components/SidebarComp';
import React from 'react';
import styled from 'styled-components';

const MessageLayout = ({ children }: { children: React.ReactChild }) => {
    return (
        <Wrapper>
            <HeaderComp />
            <div className="main">
                <SidebarComp />
                <main className="main-view">{children}</main>
            </div>
        </Wrapper>
    )
}

export default MessageLayout;

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
