import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const SidebarComp = () => {
  return (
    <Aside className="main-aside ">
      <ul className="nav flex-column ">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <div className="nav-link_icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="nav-link_text">Dashboard</div>
          </a>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="active" to="/attendance">
            <a className="nav-link">
              <div className="nav-link_icon">
                <i className="fas fa-calendar"></i>
              </div>
              <div className="nav-link_text">Attendance</div>
            </a>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="active" to="/messages">
            <a className="nav-link">
              <div className="nav-link_icon">
                <i className="fas fa-comment"></i>
              </div>
              <div className="nav-link_text">Messages</div>
            </a>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="active" to="/profile">
            <a className="nav-link">
              <div className="nav-link_icon">
                <i className="fas fa-address-card"></i>
              </div>
              <div className="nav-link_text">Profile</div>
            </a>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="active" to="/student">
            <a className="nav-link">
              <div className="nav-link_icon">
                <i className=" fas fa-user-graduate"></i>
              </div>
              <div className="nav-link_text">Students</div>
            </a>
          </NavLink>
        </li>
      </ul>
    </Aside>
  );
};

export default SidebarComp;
const Aside = styled.aside``;
