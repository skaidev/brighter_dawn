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
import NewsIntroComp from "components/home/NewsIntroComp";
import EventIntroComp from "components/home/EventIntroComp";
import { IEvent } from "interface/event.interface";

const HomePage = ({ event }:{event:IEvent}) => {
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
                  Brighter Dawn Montessori International School is an early child education institution 
                  nuturing happy and effective leaders for the 21st century.
                </p>
                <h4 className="josefin text-capitalize  mt-5">our core values</h4>
                <p className="fs-18  fw-lighter"> Intergrity, Creativity & Excellence</p>
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
                    In Brighter Dawn, we raise happy, self confident, independent, highly motivated 
                    pupils. 

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
                    We provide a solid foundation for each child to have
                    a life-long passion for learning, prepared to be independent, 
                    maximize readiness for ongoing school experience and 
                    build strong school/family partnership while exposing staff to
                    continuous self-improvement. 
                    </p>
                    <div className="numbers">
                      <div className="number-74k">
                        <p className="fw-400 fs-40 p1 num">20+</p>
                        <p className="fw-light fs-18 word">
                          Qualified Teachers and Care givers{" "}
                        </p>
                      </div>
                      <div className="number-250">
                        <p className="fw-400 fs-40 p1 num">8+</p>
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
                your child's
                <span className="josefin fw-700 fs-36 text-capitalize">
                  &nbsp;Learning <br />
                  experience
                </span>
              </p>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ipsam tenetur nostrum beatae quidem ex accusantium autem odit
                cumque iure. <br />
                We offer a wide range of extra-curricular activities.....
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
                  <p> Creche/ Playgroup</p>
                  <p>Kindergaten</p>
                  
                </div>
                <div className="admission-sect-two-item">
                  <p>Basic 1-6</p>
                  <p>After School Care</p>
                </div>
              </div>
              <h3 className="josefin mt-4">We Also Have</h3>
              <div className="admission-sect-two">
                <div className="admission-sect-two-item">
                  <p> Small class size</p>
                  <p>Well-equipped ICT & Science Lab</p>
                  
                </div>
                <div className="admission-sect-two-item">
                  <p>Up-to-Date Curriculum</p>
                  <p>Serene & Secured environment</p>
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
                <EventIntroComp />
              </div>
              <div className=" d-flex justify-content-end">
              <Link href="/events">
              <a><button className=" btn btn-outline-dark btn-lg fs-18 fw-500 text-capitalize">
                  see all
                </button></a>
              </Link>
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
                  Joel and Joey are both doing well for their age. They are very enthusiastic
                  to learn. Joel has improved so much in his writing, he has mastered writing small letters
                  so much so that his writing is now too small. Joey is also doing very well.
                  We are very happy with their progress. Keep doing a great work. 
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
                      Mrs Igodo
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
            <div className="left px-3">
              <p className="josefin fs-36 fw-700 text-capitalize">contact us</p>
              <p className="fs-14">
                Want to Know More About Brighter Dawn,
                <br /> Ready To Get started
              </p>
              <p className="fs-14">
                <i className=" fa fa-phone-alt me-3"></i>
                +2348171248394 &nbsp; &nbsp; +2348186126136
              </p>
              <p className="fs-14">
                <i className=" fa fa-envelope me-3"></i>
                info.brighterdawn@gmail.com &nbsp; &nbsp;
                info.bdmis@gmail.com
              </p>
              <p className="fs-14">
                <i className=" fa fa-map-marker-alt me-3"></i>
                Okuru/Abuloma By-pass, Off Peter Odili Road, Port Harcourt, Rivers State.
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
    title: "Awesome Teachers",
    desc: "We have qualified Teachers that are dedicated to bringing out the best in every pupil.",
  },

  {
    image: "/images/cardIcon.svg",
    title: "Awards",
    desc: "Port Harcourt Mathematics Quiz Competition (Smart Kids Affiliates)",
  },

  {
    image: "/images/cardIcon.svg",
    title: "Modern Facilities",
    desc: "We have a fully stocked library, a 21st century compliant ICT Lab, a science Lab, a sick bay, a music room, a kitchenette, a play ground and a multi-purpose hall. ",
  },

  {
    image: "/images/cardIcon.svg",
    title: "Transport Services",
    desc: "We offer pick-up and drop-off services within Port harcourt and its environs.",
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
    title: "cultural display",
  },

  {
    title: "coding classes",
  },

  {
    title: "karate classes",
  },
  {
    title: "fine art"
  },
  {
    title: "needle work and crochet"
  }
];
