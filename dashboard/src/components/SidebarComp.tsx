import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

const SidebarComp = () => {
	const router = useHistory();
	return (
		<Aside className="main-aside ">
			<ul className="nav flex-column ">
				{navLinks.map(({ to, name, icon }, i) => (
					<li className="nav-item" key={i}>
						<NavLink activeClassName="active" to={to}>
							<a className="nav-link">
								<div className="nav-link_icon">
									<i className={`fas ${icon}`}></i>
								</div>
								<div className="nav-link_text">{name}</div>
							</a>
						</NavLink>
					</li>
				))}
			</ul>
		</Aside>
	);
};

export default SidebarComp;
const Aside = styled.aside``;

const navLinks = [
	{ name: "Dashboard", to: "/#", icon: "fa-home" },
	{ name: "Students", to: "/students", icon: "fa-user-graduate" },
	{ name: "Attendance", to: "/attendance", icon: "fa-calendar" },
	{ name: "Messages", to: "/messages", icon: "fa-comment" },
	{ name: "Profile", to: "/profile", icon: "fa-address-card" },
];
