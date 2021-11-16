import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import FrontLayout from "../layout/FrontLayout";
import Head from "next/head";
import CardComp, { IHomeCard } from "./card/CardComp";
import HeaderComp from "components/HeaderComp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IArticle } from "interface/article.interface";
import { useRecoilState } from "recoil";
import { ArticlesAtom } from "store/ArticleAtom";
import { EventsAtom } from "store/EventAtom";
import { IEvent } from "interface/event.interface";
import NewsIntroComp from "components/home/NewsIntroComp";
import EventIntroComp from "components/home/EventIntroComp";

const HomePage = () => {



  return (
    <Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <FrontLayout>
        <Wrapper className="homepage ">
          <section className="hero">
            <HeaderComp />
            <div className="hero-wrapper container ">
              <div className="left flex-grow-1 mt-5">
                <h1 className="josefin fs-48 text-capitalize fw-bold">
                  a brighter future <br /> for your kids
                </h1>
                <p className="fs-18 mt-4 fw-lighter">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur hic, voluptatibus minus nobis, aliquam natus ducimus
                  eligendi consectetur temporibus ad omnis? Distinctio, eum!
                  Odit delectus nisi dignissimos vitae consequuntur voluptates?
                </p>
                <button className="btn btn-lg btn-primary text-capitalize px-4 mt-5 fw-500 fs-18">
                  enroll now
                </button>
              </div>
              <div className="right d-none d-md-block flex-grow-1 ">
                <img
                  src="/images/heroImage.png"
                  alt=""
                  className=" img-fluid"
                />
              </div>
            </div>
          </section>

          <section className="cards container d-flex flex-column flex-lg-row align-content-center justify-lg-content-center py-5">
            {cards.map((card, i) => (
              <CardComp card={card} key={i} />
            ))}
          </section>

          <section className=" container">
            <div className="about-section">
              <div className="about-wrapper mt-5 ">
                <div className="left">
                  <h2 className="fs-1 josefin fw-700 fs-36 mt-5">
                    About <br />
                    Brighter Dawn
                  </h2>
                  <p className=" fs-18 fw-lighter  mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam tenetur excepturi tempora quos nam eaque ab corporis,
                    ad laborum impedit quod sequi voluptatum rerum! Vel quas
                    rerum consequuntur. Doloremque eos nostrum minima rerum eius
                    eveniet quasi officiis, alias quibusdam tenetur.
                  </p>
                  <div className=" d-flex align-items-center">
                    <img
                      src="/images/play.png"
                      className=" img-fluid mt-3"
                      alt=""
                    />
                    <p className=" text-capitalize mt-4 mx-3">watch now</p>
                  </div>
                </div>
                <div className="right">
                  <div className="container">
                    <div className="right-img">
                      <img
                        src="/images/aboutImg_1.png"
                        className=" kid-girl mt-3 mb-3"
                        alt=""
                      />
                      <img
                        src="/images/aboutImg_2.png"
                        className=" kid-boy mt-3 mb-3"
                        alt=""
                      />
                    </div>

                    <img
                      src="/images/aboutImg_3.png"
                      className=" mg mt-3 mb-3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overview mt-5">
            <div className="overview-sect container">
              <div className="overview-wrapper">
                <div className="overview-sect-left">
                  <img
                    src="/images/building.png"
                    className="  building"
                    alt=""
                  />
                  <img
                    src="/images/play.png"
                    className=" img-fluid play"
                    alt=""
                  />
                </div>
                <div className="right">
                  <div className="text-content">
                    <h2 className="josefin fw-400 fs-36">Why Choose Us</h2>
                    <p className="fw-light fs-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut .
                    </p>
                    <div className="numbers">
                      <div className="number-74k">
                        <p className="fw-400 fs-40 p1 num">74k+</p>
                        <p className="fw-light fs-18 word">
                          Qualified Teachers{" "}
                        </p>
                      </div>
                      <div className="number-250">
                        <p className="fw-400 fs-40 p1 num">250</p>
                        <p className="fw-light fs-18 word">Extra Curricular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" container activity">
            <div className="activity-left">
              <p className="josefin fs-36 fw-400 text-capitalize">
                your kids
                <span className="josefin fw-700 fs-36 text-capitalize">
                  &nbsp;Learning <br />
                  experience
                </span>
              </p>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ipsam tenetur nostrum beatae quidem ex accusantium autem odit
                cumque iure.
              </p>
              <div className="card">
                {activities.map((activity, i) => {
                  return (
                    <div
                      className="card-active text-center text-capitalize fs-14 fw-400"
                      key={i}
                    >
                      {activity.title}
                    </div>
                  );
                })}
              </div>
              <p className=" mt-4">And other engaging activities</p>
            </div>
            <div className="activity-right ">
              <img
                src="/images/ActiveImgGrp_2.png"
                className=" img-fluid mb-3"
                alt=""
              />
              <img
                src="/images/ActiveImgGrp_1.png"
                className=" img-fluid"
                alt=""
              />
            </div>
          </section>

          <section className="admission-sect mt-5 p-5 text-center">
            <div className="container">
              <p className="admission-sect-one josefin fw-400 fs-36 text-capitalize">
                available classes for{" "}
                <span className="josefin fw-700 fs-36 text-capitalize">
                  Admission
                </span>
              </p>
              <div className="admission-sect-two">
                <div className="admission-sect-two-item">
                  <p>Playgroup/ Creche</p>
                  <p>Kindergaten</p>
                  <p>Kindergaten</p>
                </div>
                <div className="admission-sect-two-item">
                  <p>After School Care</p>
                  <p>Basic 1-6</p>
                </div>
              </div>
            </div>
          </section>

          <section className="container news-sect mt-5">
            <p className="josefin fw-400 fs-36">
              Brighter Dawn <span className="josefin fw-700 fs-36">News</span>
            </p>
            <div className="news-sect-item d-lg-grid">
			<NewsIntroComp />
            </div>
          </section>

          <section className="mt-5 event pt-5 pb-5">
            <div className="container">
              <p className="josefin fs-36 fw-400 text-capitalize">
                brighter dawn
              </p>
              <p className="josefin fs-36 fw-700 text-capitalize">
                upcoming events
              </p>
              <div className="event-sect">
			  {/* <EventIntroComp /> */}
                {/* <div className="event-sect-img me-3">
                  <img
                    src="/images/eventImg_2.png"
                    className=" img-fluid"
                    alt=""
                  />
                  <ul className=" d-flex justify-content-between p-0">
                    <li className="fs-12 px-1">Childrens Day</li>
                    <li className="fs-12">
                      <i className=" fa fa-calendar-alt me-2"></i>
                      27th May 2022
                    </li>
                  </ul>
                </div> */}
                {/* <div className="event-sect-img">
                  <img
                    src="/images/eventImg_3.png"
                    className=" img-fluid"
                    alt=""
                  />
                  <ul className=" d-flex justify-content-between p-0">
                    <li className="fs-12 px-1">Childrens Day</li>
                    <li className="fs-12">
                      <i className=" fa fa-calendar-alt me-2"></i>
                      27th May 2022
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className=" d-flex justify-content-end">
                <button className=" btn btn-outline-dark btn-lg fs-18 fw-500 text-capitalize">
                  see all
                </button>
              </div>
            </div>
          </section>

          <section className="text-center testimonial pb-5">
            <div className="container">
              <p className="josefin fw-700 fs-36 text-capitalize">
                happy parents
              </p>
              <p className="fs-18 text-capitalize mt-0 mb-5">
                what they say about us
              </p>
              <div className=" d-flex align-items-center testimonial-card p-4">
                <p className="left p-4">
                  <img src="/images/quote.svg" alt="" />
                </p>
                <p className="right p-4 lh-2 fw-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut .Us
                </p>
              </div>
              <div className="profile mt-4 d-flex align-items-center justify-content-around">
                <img
                  src="/images/testimonial_1.png"
                  className=" img-fluid mx-2 "
                  alt=""
                />
                <img
                  src="/images/testimonial_2.png"
                  className=" img-fluid mx-2"
                  alt=""
                />
                <div className=" d-flex align-items-center me-4">
                  <img
                    src="/images/testimonial_3.png"
                    className=" img-fluid"
                    alt=""
                  />
                  <div className=" d-none d-md-block">
                    <p className=" mb-0 text-uppercase fs-14 fw-500">
                      Jason Cliff
                    </p>
                    <p className="fs-14">Parent</p>
                  </div>
                </div>
                <img
                  src="/images/testimonial_4.png"
                  className=" img-fluid mx-2"
                  alt=""
                />
              </div>
              <div className="svg d-flex justify-content-center">
                <img src="/images/dot.svg" className=" img-fluid me-3" alt="" />
                <img src="/images/dot.svg" className=" img-fluid me-3" alt="" />
                <img
                  src="/images/dot_1.svg"
                  className=" img-fluid me-3"
                  alt=""
                />
                <img src="/images/dot.svg" className=" img-fluid me-3" alt="" />
                <img src="/images/dot.svg" className=" img-fluid me-3" alt="" />
              </div>
            </div>
          </section>

          <section className="award-sect p-3">
            <div className="container">
              <p className="josefin fs-36 fw-700 text-capitalize">
                awards & signatories
              </p>
            </div>
          </section>

          <section className="container contact d-flex flex-column flex-lg-row justify-content-lg-between px-0">
            <div className="left">
              <p className="josefin fs-36 fw-700 text-capitalize">contact us</p>
              <p className="fs-14">
                Want to Know More About Brighter Dawn,
                <br /> Ready To Get started
              </p>
              <p className="fs-14">
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
                        {/* <i className=" fa fa-facebook" style={{ color: "black" }}></i> */}
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
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63609.16965271174!2d6.972979090750357!3d4.8431163996701905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d4.8671595!2d7.0390912!4m5!1s0x1069cf009320d8c7%3A0x7bd8503914ca9237!2sbrighter%20dawn%20montessori!3m2!1d4.8300344!2d6.9799232!5e0!3m2!1sen!2sus!4v1636756136088!5m2!1sen!2sus"
                // width="600"
                // height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
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
    </Fragment>
  );
};

export default HomePage;

export const Wrapper = styled.div`
  .hero {
    background-image: url("/images/heroBg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }

  .admission-sect {
    background-image: url("/images/adBgImg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
`;

const cards: IHomeCard[] = [
  {
    image: "/images/cardIcon.svg",
    title: "awesome teachers",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },

  {
    image: "/images/cardIcon.svg",
    title: "global certificate",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },

  {
    image: "/images/cardIcon.svg",
    title: "best packages",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },

  {
    image: "/images/cardIcon.svg",
    title: "students support service",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },
];

const activities = [
  {
    title: "fitness and health",
  },

  {
    title: "music classes",
  },

  {
    title: "ballet classes",
  },

  {
    title: "cultural practices",
  },

  {
    title: "coding classes",
  },

  {
    title: "karate classes",
  },
];


