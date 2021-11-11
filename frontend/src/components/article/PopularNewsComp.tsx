import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from "next/link"
import { IArticle } from "interface/article.interface";
import { truncateWord } from 'utils';
// import { useRecoilValue } from 'recoil';
// import { ArticlesAtom } from 'store/ArticleAtom';
// import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from 'apollo/queries/article.query';
import { apolloStrapi } from 'apollo';

interface IProp {
    article: IArticle;
  }

const PopularNewsComp = () => {
    const [articles,setArticles] = useState<IArticle[]>([]);
    // useQuery(GET_ARTICLES,{
    //     onCompleted:(data)=>console.log(data),
    //     onError:(err)=>console.log(err)
    // })
    useEffect(()=>{
         const getData = async()=>{
             const {data} = await apolloStrapi.query({
                 query: GET_ARTICLES
             })
             setArticles(data.articles)
         }
         getData()
    },[])

    return (
        <Fragment>
            {
                articles?.map((article,i)=>(
                    <Wrapper key={i} className='popular-news d-flex align-content-center justify-content-center flex-column flex-lg-row mb-3'>
                    <div className='left'>
                        <img src={article?.image?.url} className=' img-fluid' alt="" />
                    </div>
                    <div className='right p-3'>
                        <Link href={`/news/${article?.slug}`}>
                        <a className='link-dark text-decoration-none fw-bold'><p className='fs-12 mb-0'>{truncateWord(article?.title,4)}</p></a>
                        </Link>
                        <p className='fs-12 mb-0'>{ truncateWord(article?.description,10)}</p>
                    </div>
                </Wrapper>
                ))
            }
        </Fragment>
    )
}

export default PopularNewsComp;

const Wrapper = styled.div`
`
