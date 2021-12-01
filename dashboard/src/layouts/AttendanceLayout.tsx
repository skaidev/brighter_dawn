import HeaderComp from "components/HeaderComp";
import SidebarComp from "components/SidebarComp";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AttendanceLayout = ({ children }: { children: React.ReactChild }) => {
  return (
    <Wrapper>
      <HeaderComp />
      <div className="bottom-header bg-light-primary pt-2 pb-0">
        <nav className="container">
          <ul className="nav">
            <Link to="/attendance" className="link">
              <li className="nav-item active me-5 pb-2">Take Attendance</li>
            </Link>
            <Link to="/view" className="link">
              <li className="nav-item pb-2">View Attendance</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="main">
        <SidebarComp />
        <main className="main-view">{children}</main>
      </div>
    </Wrapper>
  );
};

export default AttendanceLayout;

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
