import HeaderComp from "components/HeaderComp";
import FrontLayout from "layout/FrontLayout";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const AllEventsPage = () => {
  return (
    <FrontLayout>
      <Wrapper className="eventspage">
        <section className="hero">
          <HeaderComp />
          <div className=" container hero-content d-flex flex-lg-row flex-column justify-content-lg-center mt-5">
            <div className="hero-content-left">
              <div className="hero-content-left-top">
                <p className=" text-capitalize fs-24 fw-700 josefin mb-0">
                  current events
                </p>
              </div>
              <div className="hero-content-left-bottom d-md-grid">
                {eventTrip.map((hol, id) => {
                  return (
                    <div className="eventcal p-4 mb-3" key={id}>
                      <div className=" d-flex justify-content-between eventcal-top">
                        <p className="fs-12 left">
                          <span className=" me-2">
                            <FontAwesomeIcon icon={faCalendarAlt} width={13} />
                          </span>
                          {hol.date}
                        </p>
                        <p className="fs-14 fw-700 right">{hol.amount}</p>
                      </div>
                      <p className="josefin fs-24 fw-700">{hol.title}</p>
                      <p className="fs-14">{hol.desc}</p>
                    </div>
                  );
                })}
              </div>

              <section className="middle-bar container">
                <p className="fs-24 fw-700 josefin mb-0">Upcoming Events</p>
              </section>

              <section className="bottom-bar">
                <div className=" container hero-content mt-5 p-0">
                  <div className="middle-bar">
                    <p className=" text-capitalize fs-24 fw-700 josefin mb-0">
                      previous events
                    </p>
                  </div>
                  <div className="hero-content-left-bottom d-md-grid">
                    {eventTripTwo.map((hol, id) => {
                      return (
                        <div className="eventcal p-4 mb-3" key={id}>
                          <div className=" d-flex justify-content-between eventcal-top">
                            <p className="fs-12 left">
                              <span className=" me-2">
                                <FontAwesomeIcon
                                  icon={faCalendarAlt}
                                  width={13}
                                />
                              </span>
                              {hol.date}
                            </p>
                            <p className="fs-14 fw-700 right">{hol.amount}</p>
                          </div>
                          <p className="josefin fs-24 fw-700">{hol.title}</p>
                          <p className="fs-14">{hol.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
            <div className="hero-content-right">
              <div className="overview">
                <div className="top">
                  <p className="josefin fs-24 fw-700 text-capitalize">
                    upcoming events
                  </p>
                  <p className=" fw-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    id iusto a tempore voluptatem nobis beatae commodi dolorum
                    earum! Quia.
                  </p>
                  <div className="event-list">
                    <EventCal />
                    <EventCal />
                    <EventCal />
                    <EventCal />
                  </div>
                  <p className=" text-end">See all</p>
                </div>
                <div className="bottom mt-5 text-center">
                  <p className="josefin fs-24 fw-700">Upcoming Events</p>
                  <p className="josefin fw-700 fs-20 mt-5">
                    Dec 25th
                    <span>
                      <img
                        src="/images/eventCal.svg"
                        className="mb-2 mx-3"
                        style={{ width: "15px" }}
                        alt=""
                      />
                    </span>
                  </p>
                  <p className="fw-700">Christmas Party</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" container gallery mt-5">
          <div className="gallery-top">
            <p className="josefin fs-24 fw-700 mb-0">Previous Events Gallery</p>
          </div>
          <div className="gallery-bottom d-md-grid p-4">
            <div>
              <img src="/images/gallery_1.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_2.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_3.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_4.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_5.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_6.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_7.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_8.png" className=" img-fluid mb-3" alt="" />
            </div>
            <div>
              <img src="/images/gallery_9.png" className=" img-fluid mb-3" alt="" />
            </div>
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

const EventCal = () => {
  return (
    <div className="overview-base d-flex align-items-center">
      <img src="/images/eventCal.svg" style={{ width: "15px" }} alt="" />
      <p className=" mb-0 fs-12 p1">23rd May</p>
      <p className=" mb-0 p2">Childrens Day Event</p>
    </div>
  );
};

const eventTrip = [
  {
    id: 1,
    date: "20th Ocober 2021",
    amount: "NGN.7,500",
    title: "School Excursion",
    desc: "An excursion to the Bahamas",
  },

  {
    id: 2,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 3,
    date: "20th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 4,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },

  {
    id: 5,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },
];

const eventTripTwo = [
  {
    id: 1,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "School Excursion",
    desc: "An excursion to the Bahamas",
  },

  {
    id: 2,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 3,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 4,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },

  {
    id: 5,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 6,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },

  {
    id: 7,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 8,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },

  {
    id: 9,
    date: "13th Ocober 2021",
    amount: "Free",
    title: "Eid El Kabir",
  },

  {
    id: 10,
    date: "13th Ocober 2021",
    amount: "NGN.7,500",
    title: "Eid El Kabir",
  },
];
