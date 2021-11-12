// import HeaderComp from "components/HeaderComp";
import PopularNewsComp from "components/article/PopularNewsComp";
import HeaderComp from "components/HeaderComp";
import React, { Fragment } from "react";
import FooterComp from "../components/FooterComp";
import styled from "styled-components";

const NewsLayout = ({ children }: { children: React.ReactChild }) => {
  return (
    <Fragment>
      <Wrapper className="newspage">
          <div className="hero">
          <HeaderComp />
        <div className="hero-section d-flex flex-column flex-lg-row justify-content-lg-center container mt-5">
          <div className="hero-section-left">{children}</div>
          <div className="hero-section-right">
            <div className="hero-section-right-top">
              <p className="josefin fs-24 fw-700">Popular News</p>
              <div className="hero-section-right-top-one">
                <PopularNewsComp />
              </div>
            </div>
          </div>
        </div>
          </div>
        <FooterComp />
      </Wrapper>
    </Fragment>
  );
};

export default NewsLayout;

const Wrapper = styled.div`
  .hero {
    background: url("/images/heroBg.png") no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
`;
