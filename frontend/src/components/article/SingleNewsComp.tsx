import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IArticle } from "interface/article.interface";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IProp {
	article: IArticle;
}

const SingleNewsComp = ({ article }: IProp) => {
	return (
		<Wrapper className="d-flex flex-lg-row flex-column justify-content-lg-center newslist-left-section mb-4">
			<div className="left">
				<img src={article?.image?.url} alt="" />
			</div>
			<div className="right">
				<div className=" d-flex right-top">
					<p className="fs-10 mb-0 left">Childrens Day</p>
					<p className="fs-10 mb-0 right">Brighter Dawn</p>
					<div className=" d-flex align-self-end">
						<FontAwesomeIcon icon={faUpload} width={15} className="" />
					</div>
				</div>
				<Link href={`/news/${article?.slug}`}>
					<a className="link">
						<p className="fs-18 fw-500">{article?.title}</p>
					</a>
				</Link>

				<p className=" fw-light">{article?.description}</p>
				<div className=" d-flex align-items-center right-bottom">
					<p className="fs-10">23rd May</p>
					<p className="fs-10 fw-500">Admin</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default SingleNewsComp;

const Wrapper = styled.div`
	.left {
		flex: 1;
		img {
			width: 100%;
		}
	}
	.right {
		flex: 1;
	}
`;
