import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderComp: React.FC = (): JSX.Element => {
	const [menu, setMenu] = useState(false);
	const [time, setTime] = useState(false);
	const router = useRouter();
	const { pathname } = router;

	setTimeout(() => {
		setTime(true);
	});

	return (
		<Header className="front-header">
			<nav className="navbar container ">
				<i
					className="fas fa-2x fa-bars d-md-none"
					role="button"
					onClick={() => setMenu(true)}
				></i>
				<ul className="nav d-none d-md-flex mx-2">
					{navItems.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.name === "Home" ? "/" : (nav?.link as string)}>
								<a
									className={`nav-link link-dark bg-grey fs-18 fw-400 ${
										pathname?.includes(nav.link as string) ? "active" : ""
									}`}
								>
									{nav.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div className="logo d-flex ">
				<Link href="/">
					<a className="navbar-brand ">
						<img src="/images/logo.png" alt="" />
					</a>
				</Link>
				</div>
				<div className="enroll ">
				<Link href='/registration'>
					<a className="btn btn-lg btn-outline-dark px-5 fs-6 fw-500 pr-5 ">Enroll</a>
				</Link>
				</div>
			</nav>
			{menu && (
				<div className="mobile-nav d-md-none">
					{time && (
						<div className={`mobile-nav-cover`}>
							<div className="p-2 top d-flex justify-content-start">
								<i
									className="fas fa-2x fa-times me-3 mt-2 mx-3"
									role="button"
									onClick={() => {
										setMenu(false);
										setTime(false);
									}}
								></i>
								<img src="/images/logo.png" alt="" />
							</div>
							<ul className=" mt-5">
								{navItems.map((nav, i) => (
									<li className="nav-item" key={i}>
										<Link
											href={nav.name === "Home" ? "/" : (nav?.link as string)}
										>
											<a className="nav-link link-dark">{nav.name}</a>
										</Link>
									</li>
								))}
							</ul>
							<button className=" btn btn-lg bg-primary mx-4 fw-500">
								Enroll Now
							</button>
						</div>
					)}
				</div>
			)}
		</Header>
	);
};

export default HeaderComp;

interface INav {
	name: string;
	link?: string | null;
}
const navItems: INav[] = [
	{ name: "Home", link: null },
	{ name: "News", link: "/news" },
	{ name: "Events", link: "/events" },
	{ name: "Facilities", link: "/facilities" },
];

const Header = styled.header`
	.active {
		color: #f6821f;
	}
	.logo{
		
		margin-right: 9rem;
		}
		.enroll{
			margin-right: 2rem;
		}
`;
