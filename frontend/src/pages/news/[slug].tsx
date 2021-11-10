import { apolloStrapi } from "apollo";
import { GET_ARTICLE, GET_ARTICLES } from "apollo/queries/article.query";
import { IArticle } from "interface/article.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import NewsLayout from "layout/NewsLayout";

const NewsPageItem = ({ article }: { article: IArticle }) => {
  return (
    <NewsLayout>
      <Wrapper className="">
        <article>
          <p className="josefin hero-content-title fs-36 fw-600">
            {article?.title}
          </p>
          <p className="fs-14 fw-400 hero-content-desc mb-5">
            Updated 10:29 AM, Wed October 20, 2021
          </p>
          <img src={article?.image?.url} className=" img-fluid mb-4" alt="" />
          <ReactMarkdown>{article?.content}</ReactMarkdown>
        </article>

        
      </Wrapper>
    </NewsLayout>
  );
};

export default NewsPageItem;

const Wrapper = styled.div`
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx?.params?.slug;
  try {
    const { data } = await apolloStrapi.query({
      query: GET_ARTICLE,
      variables: { slug },
    });
    const article = data?.articles?.[0];
    return {
      props: {
        article,
      },
    };
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
