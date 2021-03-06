import { apolloStrapi } from "apollo";
import { GET_ARTICLE, GET_ARTICLES } from "apollo/queries/article.query";
import { IArticle } from "interface/article.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import NewsLayout from "layout/NewsLayout";
import Head from "next/head";
import dayjs from "dayjs";

const NewsPageItem = ({ article }: { article: IArticle }) => {
	return (
		<Fragment>
			<Head>
				<title>{article?.title}</title>
				<meta name="description" content={article?.description} />
			</Head>
			<NewsLayout>
				<Wrapper className="newspage">
					<article className="hero">
						<p className="josefin hero-content-title fs-36 fw-600">
							{article?.title}
						</p>
						<p className="fs-14 fw-400 hero-content-desc mb-5">
							{dayjs(article?.createdAt).format("D MMM YYYY")}
						</p>
						<img src={article?.image?.url} className=" img-fluid mb-4" alt="" />
						<ReactMarkdown>{article?.content}</ReactMarkdown>
					</article>
				</Wrapper>
			</NewsLayout>
		</Fragment>
	);
};

export default NewsPageItem;

const Wrapper = styled.div`
	.hero {
		img {
			width: 100%;
		}
	}
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
	const slug = ctx?.params?.slug;
	try {
		const { data } = await apolloStrapi.query({
			query: GET_ARTICLE,
			variables: { slug },
		});
		const article = data?.articles?.[0];
		if (article) {
			return {
				props: {
					article,
				},
				revalidate: 60,
			};
		} else {
			return {
				props: {
					article: null,
				},
				revalidate: 60,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			props: {
				article: null,
			},
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await apolloStrapi.query({ query: GET_ARTICLES });
	const articles: IArticle[] = data?.articles;
	const paths = articles?.map((article) => ({
		params: { slug: article?.slug },
	}));
	return {
		paths,
		fallback: "blocking",
	};
};
