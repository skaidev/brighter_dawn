import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderComp: React.FC = (): JSX.Element => {
	const [menu, setMenu] = useState(false);
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<Header className="front-header">
			<nav className="navbar container">
				<i
					className="fas fa-2x fa-bars d-md-none"
					role="button"
					onClick={() => setMenu(true)}
				></i>
				<ul className="nav d-none d-md-flex">
					{navItems.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.link}>
								<a
									className={`nav-link link-dark bg-grey fs-18 fw-400 ${
										pathname?.split("/")?.[1] === nav.link ? "active" : ""
									}`}
								>
									{nav.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<Link href="/">
					<a className="navbar-brand">
						<img src="/images/logo.png" alt="" />
					</a>
				</Link>
				<button className="btn btn-lg btn-outline-dark px-5 fs-6 fw-500 pr-5 ">
					Enroll
				</button>
			</nav>
			{menu && (
				<div className="mobile-nav d-md-none">
					{open && (
						<div className={`mobile-nav-cover`}>
							<div className="p-2 d-flex justify-content-start">
								<i
									className="fas fa-2x fa-times me-3"
									role="button"
									onClick={() => {
										setMenu(false);
										setOpen(false);
									}}
								></i>
							</div>
							<ul className="">
								{navItems.map((nav, i) => (
									<li className="nav-item" key={i}>
										<Link href={`/${nav.link}`}>
											<a className="nav-link link-dark">{nav.name}</a>
										</Link>
									</li>
								))}
							</ul>
							<button className=" btn btn-lg bg-primary mx-4 mt-4">
								Enroll
							</button>
						</div>
					)}
				</div>
			)}
		</Header>
	);
};

export default HeaderComp;

const navItems = [
	{ name: "Home", link: "/" },
	{ name: "News", link: "/news" },
	{ name: "Events", link: "/events" },
];

const Header = styled.header`
	.active {
		color: red;
	}
`;
