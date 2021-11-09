import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apolloStrapi } from "apollo";
import { GET_ARTICLES } from "apollo/queries/article.query";
import PopularNewsComp from "components/article/PopularNewsComp";
import SingleNewsComp from "components/article/SingleNewsComp";
import HeaderComp from "components/HeaderComp";
import { IArticle } from "interface/article.interface";
import FrontLayout from "layout/FrontLayout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ArticlesAtom } from "store/ArticleAtom";
import styled from "styled-components";

const NewsPage = ({ initialArticles }: { initialArticles: IArticle[] }) => {
  const [articles, setArticles] = useRecoilState(ArticlesAtom);

  useEffect(() => {
    if (initialArticles) setArticles(initialArticles);
  }, []);

  return (
    <FrontLayout>
      <Wrapper className="newspage">
        <section className="hero">
          <HeaderComp />
          <div className="hero-section d-flex flex-column flex-lg-row justify-content-lg-center container mt-5">
            <div className="hero-section-left">
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
                    />
                  </div>
                </form>
              </div>
              <div className="left-middle mb-4 mt-4">
                <p className="text-capitalize josefin fw-400 fs-36">
                  recent news
                </p>
                <div>
                  {articles?.map((article, i) => (
                    <SingleNewsComp key={i} article={article} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-section-right">
              <div className="hero-section-right-top">
                <p className="josefin fs-24 fw-700">Popular News</p>
                <div className="hero-section-right-top-one">
                  <PopularNewsComp />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container contact d-flex flex-column flex-lg-row justify-content-lg-between p-3">
          <div className="left">
            <p className="josefin fs-36 fw-700 text-capitalize">contact us</p>
            <p className="fs-14">
              Want to Know More About Brighter Dawn,
              <br /> Ready To Get started
            </p>
            <p className="fs-14">
              <i></i>
              <i className=" fa fa-phone-alt me-3"></i>
              +2349012624162 &nbsp; &nbsp; +2349012624162
            </p>
            <p className="fs-14">
            <i className=" fa fa-envelope me-3"></i>
              charlesclifford43@hela.law
            </p>
            <p className="fs-14">
            <i className=" fa fa-map-marker-alt me-3"></i>
              No 6. Mission road Elimgbu, ward 3 Rivers State
            </p>
            <p className="">
              <ul className=" social-icons p-0 mb-5">
                <li>
                  <Link href="">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        width={20}
                        style={{ color: "black" }}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        width={20}
                        style={{ color: "black" }}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        width={20}
                        style={{ color: "black" }}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        width={20}
                        style={{ color: "black" }}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37821.09180571387!2d7.019170432787656!3d4.863575909519805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d2740493eb2b%3A0x4506b5c52eff762e!2sRumuodara%20500102%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1635259720414!5m2!1sen!2sng"
              className=" mt-2"
            ></iframe>
          </div>
          <div className="right">
            <p className="josefin fs-36 fw-400">Send Us a Message</p>
            <form action="" className="">
              <div className=" d-flex mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" form-control me-5"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" form-control"
                />
              </div>
              <div className=" d-flex mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className=" form-control me-5"
                />
                <input
                  type="text"
                  placeholder="Category"
                  className=" form-control"
                />
              </div>
              <textarea
                placeholder="Message"
                className=" form-control pb-5"
              ></textarea>
              <div className=" d-flex justify-content-end">
                <button className=" btn btn-lg bg-primary mt-5 text-capitalize">
                  submit
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className=" container mt-5 newsletter d-flex align-items-center flex-column justify-content-center flex-md-row">
          <div className="left">
            <p className="fs-48 fw-500 text-capitalize mb-0">newsletter</p>
          </div>
          <div className="right p-3 d-flex">
            <input
              type="text"
              placeholder="Your Email Here"
              className=" form-control-lg p-2 px-3"
            />
            <button className="btn btn-lg px-3">send</button>
          </div>
        </section>
      </Wrapper>
    </FrontLayout>
  );
};

export default NewsPage;

const Wrapper = styled.div`
  .hero {
    background: url("/images/heroBg.png") no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await apolloStrapi.query({
      query: GET_ARTICLES,
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
