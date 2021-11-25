import React from "react";
import styled from "styled-components";
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
					<a className="nav-link active" href="/">
						<div className="nav-link_icon">
							<i className="fas fa-home"></i>
						</div>
						<div className="nav-link_text">Attendance</div>
					</a>
				</li>
			</ul>
		</Aside>
	);
};

export default SidebarComp;
const Aside = styled.aside``;
