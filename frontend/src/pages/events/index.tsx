import HeaderComp from "components/HeaderComp";
import FrontLayout from "layout/FrontLayout";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCalendarAlt,
  // faArrowRight,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { GetServerSideProps } from "next";
import { apolloStrapi } from "apollo";
import { GET_EVENTS } from "apollo/queries/event.query";
import { IEvent } from "interface/event.interface";
import UpcomingEventComp from "components/event/UpcomingEventComp";

const AllEventsPage = ({ initialEvents }: { initialEvents: IEvent[] }) => {
  const [events] = useState<IEvent[]>(initialEvents);
  return (
    <FrontLayout>
      <Wrapper className="eventspage">
        <section className="hero">
          <HeaderComp />
          <div className=" container hero-content d-flex flex-lg-row flex-column justify-content-lg-center mt-5">
            <div className="hero-content-left">
              <div className="hero-content-left-top">
                <p className=" text-capitalize fs-24 fw-700 josefin mb-0">
                  all events
                </p>
              </div>
              <div className="hero-content-left-bottom">
                {events?.map((event, i) => (
                  <UpcomingEventComp key={i} event={event}/>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="container news-sect mt-5">
          <p className="josefin fw-400 fs-36">
            Brighter Dawn <span className="josefin fw-700 fs-36">News</span>
          </p>
          <div className="news-sect-item">
            {news.map((item, id) => {
              return (
                <div className="news-sect-item-desc" key={id}>
                  <img src={item.img} alt="" className=" img-fluid" />
                  <p className="fs-14 fw-700 lh-2 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut n ullamco laboris nisi ut .
                  </p>
                  <p className="fs-14 lh-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut .
                  </p>
                  <Link href="/">
                    <a className=" text-decoration-none">
                      <p className="fw-500 text-capitalize">
                        read more
                        <span className=" mx-2">
                          <FontAwesomeIcon icon={faArrowRight} width={15} />
                        </span>
                      </p>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* <section className="admission-sect mt-5 p-5 text-center">
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
        </section> */}

        <section className="container contact d-flex flex-column flex-lg-row justify-content-lg-between px-0">
          <div className="left px-4">
            <p className="josefin fs-36 fw-700 text-capitalize">contact us</p>
            <p className="fs-14">
              Want to Know More About Brighter Dawn,
              <br /> Ready To Get started
            </p>
            <p className="fs-14">
              <FontAwesomeIcon icon={faPhoneAlt} width={16} className=" me-3" />
              +2349012624162 &nbsp; &nbsp; +2349012624162
            </p>
            <p className="fs-14">
              <FontAwesomeIcon icon={faEnvelope} width={16} className=" me-3" />
              charlesclifford43@hela.law
            </p>
            <p className="fs-14">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                width={16}
                className=" me-3"
              />
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

export default AllEventsPage;
const Wrapper = styled.div`
  .hero {
    background: url("/images/heroBg.png") no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
`;

const news = [
  {
    id: 1,
    img: "/images/newsImg_1.png",
  },

  {
    id: 2,
    img: "/images/newsImg_2.png",
  },
];

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await apolloStrapi.query({
      query: GET_EVENTS,
    });
    const initialEvents = data?.events;

    return {
      props: {
        initialEvents,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialEvents: [],
      },
    };
  }
};
