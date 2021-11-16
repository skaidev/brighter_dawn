import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { IArticle } from "interface/article.interface";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "apollo/queries/article.query";



const NewsIntroComp = () => {
const [articles,setArtciles] = useState<IArticle[]>();
const {loading}  =useQuery(GET_ARTICLES,{
  variables:{limit:2},
  onCompleted:(data)=>setArtciles(data?.articles),
  onError:(err)=>console.log(err)
})

if(loading) return <p>Loading...</p>
  return (
    <Fragment>
      {
        articles?.map((article,i)=>(
          <SingleItem key={i} article={article}/>

        ))
      }
    </Fragment>
  );
};

export default NewsIntroComp;

const Wrapper = styled.div``;

const SingleItem  = ({article}:{article:IArticle})=>(
<Wrapper>
      <div className="news-sect-item-desc">
        <div className="imgitem">
        <img src={article?.image?.url} alt="" className=" img-fluid" />
        </div>
        <p className="fs-14 fw-700 lh-2 mt-4">{article?.title}</p>
        <p className="fs-14 lh-2">{article?.description}</p>
        <Link href={`/news/${article?.slug}`}>
          <a className=" text-decoration-none link-dark">
            <p className="fw-500 text-capitalize">
              read more
              <span className=" mx-2">
                <i className=" fa fa-arrow-right"></i>
              </span>
            </p>
          </a>
        </Link>
      </div>
    </Wrapper>
)