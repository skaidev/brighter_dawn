import HeaderComp from "components/HeaderComp";
import FrontLayout from "layout/FrontLayout";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faCalendarAlt,
	// faArrowRight,
	faPhoneAlt,
	faEnvelope,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faLinkedin,
	faInstagramSquare,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { GetServerSideProps } from "next";
import { apolloStrapi } from "apollo";
import { GET_EVENTS } from "apollo/queries/event.query";
import { IEvent } from "interface/event.interface";
import UpcomingEventComp from "components/event/UpcomingEventComp";

const AllEventsPage = ({ initialEvents }: { initialEvents: IEvent[] }) => {
	const [events] = useState<IEvent[]>(initialEvents);
	return (
		<FrontLayout>
			<Wrapper className="eventspage">
				<section className="hero">
					<HeaderComp />
					<div className=" container hero-content d-flex flex-lg-row flex-column justify-content-lg-center mt-5">
						<div className="hero-content-left">
							<div className="hero-content-left-top">
								<p className=" text-capitalize fs-24 fw-700 josefin mb-0">
									all events
								</p>
							</div>
							<div className="hero-content-left-bottom">
								<UpcomingEventComp events={events} />
							</div>
						</div>
					</div>
				</section>
			</Wrapper>
		</FrontLayout>
	);
};

export default AllEventsPage;
const Wrapper = styled.div`
	.hero {
		background: url("/images/heroBg.png") no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
	}
`;

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data } = await apolloStrapi.query({
			query: GET_EVENTS,
			variables: {
				limit: 20,
			},
		});
		const initialEvents = data?.events;

		return {
			props: {
				initialEvents: initialEvents || [],
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				initialEvents: [],
			},
		};
	}
};
