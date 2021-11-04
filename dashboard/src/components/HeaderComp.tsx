import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComp = () => {
	return (
		<Header>
			<div className="top-header bg-dark text-light">
				<nav className="navbar container-fluid">
					<p className="mb-0 fs-24">BDMIS</p>
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
			<div className="bottom-header bg-light-primary py-2">
				<nav className="container-fluid">
					<ul className="nav">
						<li className="nav-item">Student</li>
					</ul>
				</nav>
			</div>
		</Header>
	);
};

export default HeaderComp;

const Header = styled.header``;
