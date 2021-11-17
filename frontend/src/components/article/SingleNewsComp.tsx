import { IArticle } from "interface/article.interface";
import { truncateWord } from "utils";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

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
          {/* <div className=" d-flex align-self-end">
            <FontAwesomeIcon icon={faUpload} width={15} className="" />
          </div> */}
        </div>
        <Link href={`/news/${article?.slug}`}>
          <a className="link">
            <p className="fs-18 fw-500">{article?.title}</p>
          </a>
        </Link>
        <p className=" fw-light">{truncateWord(article?.description,30)}</p>
        <div className=" d-flex align-items-center right-bottom">
          {dayjs(article?.createdAt).format("D MMM YYYY")}
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
     height: 100%;
      object-fit: cover;
    }
  }
  .right {
    flex: 1;
  }
`;
