import HeaderComp from "components/HeaderComp";
import FrontLayout from "layout/FrontLayout";
import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { IEvent } from "interface/event.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import { apolloStrapi } from "apollo";
import { GET_EVENT, GET_EVENTS } from "apollo/queries/event.query";
import Head from "next/head";

const SingleEventsPage = ({ event }: { event: IEvent }) => {
	return (
		<Fragment>
			<Head>
				<title>{event?.title}</title>
				<meta name="description" content={event?.description} />
			</Head>
			<FrontLayout>
				<Wrapper className="single-eventpage">
					<section className="hero">
						<HeaderComp />
						<div className="hero-content container mt-5">
							<div className="hero-content-top mb-5">
								<p className="josefin fs-24 fw-700 mb-0">{event?.title}</p>
							</div>
							<p className=" fw-500">
								{event?.title}
								<span className="fs-12 fw-500 mx-4">{event?.date}</span>
							</p>
							<img src={event?.image?.url} className=" img-fluid mb-5" alt="" />
							<ReactMarkdown>{event?.body}</ReactMarkdown>
							<div className="hero-content-bottom d-md-grid mb-5">
								{event?.gallery?.map((img, i) => (
									<img src={img?.url} className=" img-fluid" key={i} alt="" />
								))}
							</div>
						</div>
					</section>
				</Wrapper>
			</FrontLayout>
		</Fragment>
	);
};

export default SingleEventsPage;
const Wrapper = styled.div`
	.hero {
		background: url("/images/heroBg.png") no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		&-content {
			img {
				width: 100%;
			}
		}
	}
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
	const slug = ctx?.params?.slug;

	try {
		const { data } = await apolloStrapi.query({
			query: GET_EVENT,
			variables: { slug },
		});
		const event = data?.events?.[0];
		return {
			props: {
				event,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				event: null,
			},
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await apolloStrapi.query({ query: GET_EVENTS });
	const events: IEvent[] = data?.events;
	const paths = events?.map((event) => ({
		params: { slug: event?.slug },
	}));
	return {
		paths,
		fallback: "blocking",
	};
};
