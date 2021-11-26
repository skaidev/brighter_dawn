import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { IEvent } from "interface/event.interface";
import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";

const UpcomingEventComp = ({ events }: { events: IEvent[] }) => {
	return (
		<Fragment>
			{events?.map((event, i) => (
				<SingleEventItem key={i} event={event} />
			))}
		</Fragment>
	);
};

export default UpcomingEventComp;

const Wrapper = styled.div`
	.eventcal {
		.left {
			img {
				width: 100%;
			}
		}
	}
`;

const SingleEventItem = ({ event }: { event: IEvent }) => (
	<Wrapper className="eventpage">
		<Link href={`/events/${event?.slug}`}>
			<a className="link-dark text-decoration-none">
				<div className="eventcal d-flex flex-column flex-lg-row mb-3">
					<div className="left">
						<img src={event?.image.url} className=" img-fluid" alt="" />
					</div>
					<div className="right p-4">
						<div className=" d-flex justify-content-between eventcal-top">
							<p className="fs-12 left">
								<span className=" me-2">
									<FontAwesomeIcon icon={faCalendarAlt} width={13} />
								</span>
								{dayjs(event?.createdAt).format("YYYY MMM D")}
							</p>
						</div>
						<Link href={`/events/${event?.slug}`}>
							<a className=" text-decoration-none" style={{ color: "#000" }}>
								<p className="josefin fs-24 fw-700">{event?.title}</p>
							</a>
						</Link>
						<p className="fs-14">{event?.description}...</p>
					</div>
				</div>
			</a>
		</Link>
	</Wrapper>
);
