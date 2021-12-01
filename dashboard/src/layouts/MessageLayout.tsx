import HeaderComp from 'components/HeaderComp';
import SidebarComp from 'components/SidebarComp';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MessageLayout = ({ children }: { children: React.ReactChild }) => {
    return (
        <Wrapper>
            <HeaderComp />
            <div className="bottom-header bg-light-primary pt-2 pb-0">
        <nav className="container">
          <ul className="nav">
            <Link to="/attendance" className="link">
              <li className="nav-item active me-5 pb-2">Messages</li>
            </Link>
          </ul>
        </nav>
      </div>
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
