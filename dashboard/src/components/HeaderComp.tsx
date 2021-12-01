import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <Header>
      <div className="top-header bg-dark text-light">
        <nav className="navbar container">
          <p className="mb-0 fs-24">School Management System</p>
          <ul className="nav">
            <li className="nav-item dropdown">
              <button
                className="btn p-0 text-light dropdown-toggler"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-user me-1"></i> Charlse
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Item 1</li>
                <li className="dropdown-item">Item 2</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="bottom-header bg-light-primary pt-2 pb-0">
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
      </div> */}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .bottom-header {
    .nav {
      .link {
        color: #24292f;
        .nav-item {
          border-bottom: 2px solid #D6E9F7;
        }
        .nav-item:hover {
          border-bottom: 2px solid #24292f;
        }
      }
    }
  }
`;
