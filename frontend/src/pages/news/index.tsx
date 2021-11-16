import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apolloStrapi } from "apollo";
import { GET_ARTICLES } from "apollo/queries/article.query";
import SingleNewsComp from "components/article/SingleNewsComp";
import { IArticle } from "interface/article.interface";
import NewsLayout from "layout/NewsLayout";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ArticlesAtom } from "store/ArticleAtom";
import styled from "styled-components";

const NewsPage = ({ initialArticles }: { initialArticles: IArticle[] }) => {
  const [articles, setArticles] = useRecoilState(ArticlesAtom);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (initialArticles) setArticles(initialArticles);
  }, []);

  return (
    <NewsLayout>
      <Wrapper className="newspage">
        <div className="left-top">
          <form className="form">
            <div className="input-group">
              <span>
                <FontAwesomeIcon
                  icon={faSearch}
                  width={20}
                  style={{ color: "#c4c4c4" }}
                />
              </span>
              <input
                type="text"
                placeholder="Search News"
                className=" form-control border-0"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className="left-middle mb-4 mt-4">
          <p className="text-capitalize josefin fw-400 fs-36">recent news</p>
          <div>
            {articles
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((article, i) => (
                <SingleNewsComp key={i} article={article} />
              ))}
          </div>
        </div>
      </Wrapper>
    </NewsLayout>
  );
};

export default NewsPage;

const Wrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await apolloStrapi.query({
      query: GET_ARTICLES,
      variables:{limit:10}
    });
    const initialArticles = data?.articles;

    return {
      props: {
        initialArticles,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialArticles: [],
      },
    };
  }
};
