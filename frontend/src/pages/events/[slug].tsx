import HeaderComp from "components/HeaderComp";
import FrontLayout from "layout/FrontLayout";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const SingleEventsPage = () => {
	return (
		<FrontLayout>
			<Wrapper>
				<section className="hero">
					<HeaderComp />
					<div className="hero-content container mt-5">
						<p className="josefin fs-36 fw-600 mb-0">Childrens Day Celebration</p>
						<p className="fs-14 fw-400">Posted 10:29 AM, Wed October 20, 2021</p>
						<ReactMarkdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit autem at harum iusto sapiente enim possimus natus magni eaque?</ReactMarkdown>
						<img src="/images/gallery_3.png" className=" img-fluid" alt="" />
					</div>
				</section>
			</Wrapper>
		</FrontLayout>
	);
};

export default SingleEventsPage;
const Wrapper = styled.div`
	.hero {
		&-content {
			img {
				width: 100%;
			}
		}
	}
`;
