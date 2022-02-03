import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderComp from "components/HeaderComp";
import EventIntroComp from "components/home/EventIntroComp";
import NewsIntroComp from "components/home/NewsIntroComp";
import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import FrontLayout from "../layout/FrontLayout";
import CardComp, { IHomeCard } from "./card/CardComp";
import CarouselComp from "./carousel/CarouselComp";

const HomePage = () => {
  return (
    <Fragment>
      <FrontLayout>
        <Wrapper className='homepage '>
          <section className='hero'>
            <HeaderComp />
            <div className='hero-wrapper container '>
              <div className='left flex-grow-1 mt-5'>
                <h1 className='josefin fs-48 text-capitalize fw-bold'>
                  a brighter future <br /> for your kids
                </h1>
                <p className='fs-18 mt-4 fw-lighter'>
                  Brighter Dawn Montessori International School is an early
                  child education institution nuturing happy and effective
                  leaders for the 21st century.
                </p>

                <p className='fs-18  fw-lighter fst-italic'>
                  {" "}
                  ......Intergrity, Creativity & Excellence
                </p>
                <button className='btn btn-lg btn-primary text-capitalize px-4 mt-5 fw-500 fs-18'>
                  enroll now
                </button>
              </div>
              <div className='right d-none d-md-block flex-grow-1 '>
                <img
                  src='/images/heroImage.png'
                  alt=''
                  className=' img-fluid'
                />
              </div>
            </div>
          </section>

          <section className='cards container d-flex flex-column flex-lg-row align-content-center justify-lg-content-center py-5'>
            {cards.map((card, i) => (
              <CardComp card={card} key={i} />
            ))}
          </section>

          <section id='about' className=' container'>
            <div className='about-section'>
              <div className='about-wrapper mt-5 '>
                <div className='left'>
                  <h2 className='fs-1 josefin fw-700 fs-36 mt-5'>
                    About <br />
                    Brighter Dawn
                  </h2>
                  <p className=' fs-18 fw-lighter  mt-5'>
                    In Brighter Dawn, we raise happy, <br /> self confident,
                    independent, highly motivated pupils.
                  </p>
                  {/* <div className=' d-flex align-items-center'>
                    <img
                      src='/images/play.png'
                      className=' img-fluid mt-3'
                      alt=''
                    />
                    <p className=' text-capitalize mt-4 mx-3'>watch now</p>
                  </div> */}
                </div>
                <div className='right'>
                  <div className='container'>
                    <div className='right-img'>
                      <img
                        className='img-fluid'
                        src='/images/madam.jpeg'
                        alt=''
                      />
                    </div>
                    <div className='dam josefin'>
                      <p className='dam mt-4 fs-18 fw-bold josefin'>
                        Mrs Florence Adokiye Amiesimaka 
                        <p className='fs-14 fw-lighter '>B.A (Hons),
                        PGDIpEd, LLB (Hons) BL, LLM</p>
                      </p>
                      <p className='fs-18 fw-lighter '>
                        Director, Brighter Dawn Schools{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='overview mt-5'>
            <div className='overview-sect container'>
              <div className='overview-wrapper'>
                <div className='overview-sect-left'>
                  <img
                    src='/images/building.png'
                    className='  building'
                    alt=''
                  />
                  <img
                    src='/images/play.png'
                    className=' img-fluid play'
                    alt=''
                  />
                </div>
                <div className='right'>
                  <div className='text-content'>
                    <h2 className='josefin fw-400 fs-36'>Why Choose Us</h2>
                    <p className='fw-light fs-18'>
                      We provide a solid foundation for each child to have a
                      life-long passion for learning, prepared to be
                      independent, maximize readiness for ongoing school
                      experience and build strong school/family partnership
                      while exposing staff to continuous self-improvement.
                    </p>
                    <div className='numbers'>
                      <div className='number-74k'>
                        <p className='fw-400 fs-40 p1 num'>20+</p>
                        <p className='fw-light fs-18 word'>
                          Qualified Teachers and Care givers{" "}
                        </p>
                      </div>
                      <div className='number-250'>
                        <p className='fw-400 fs-40 p1 num'>8+</p>
                        <p className='fw-light fs-18 word'>Extra Curricular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=' container activity'>
            <div className='activity-left'>
              <p className='josefin fs-36 fw-400 text-capitalize'>
                your {"child's"}
                <span className='josefin fw-700 fs-36 text-capitalize'>
                  &nbsp;Learning <br />
                  experience
                </span>
              </p>
              <p className=''>
                We offer a wide range of extra-curricular activities.....
              </p>
              <div className='card'>
                {activities.map((activity, i) => {
                  return (
                    <div
                      className='card-active text-center text-capitalize fs-14 fw-400'
                      key={i}>
                      {activity.title}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='activity-right '>
              <img
                src='/images/ActiveImgGrp_2.png'
                className=' img-fluid mb-3'
                alt=''
              />
              <img
                src='/images/ActiveImgGrp_1.png'
                className=' img-fluid'
                alt=''
              />
            </div>
          </section>

          <section className='container '>
            <div className='facilities d-flex '>
              <div className='four-img  d-flex flex-column '>
                <div className='top  mb-5 d-flex justify-content-between'>
                  <img src='/images/pupils in IT lab jpg-01 1.png' alt='' />
                  <img src='/images/pupils in the science lab jpg-01 1.png' alt='' />
                </div>
                <div className='bottom d-flex justify-content-between'>
                  <img src='/images/playground jpg-01 1.png' alt='' />
                  <img src='/images/library jpg-01 1.png' alt='' />
                </div>
              </div>

              <div className='text-content d-flex flex-column justify-content-between'>
                <h3 className='josefin fs-36 fw-400 text-capitalize'>
                  facilities
                </h3>
                <div className='para'>
                  <p className=' fs-18 font-weight-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut n ullamco laboris nisi ut .
                  </p>
                  <p className='fw-light fs-18'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut .
                  </p>
                </div>
                <div className='stuff d-flex justify-content-between '>
                  {properties.map((property, i) => {
                    return (
                      <div
                        className='stuff-active text-center text-capitalize fs-14 fw-400'
                        key={i}>
                        {property.title}
                      </div>
                    );
                  })}
                </div>
                <Link href={`/facilities`}>
                  <a className='text-decoration-none mt-2'>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section className='admission-sect mt-5 p-5 text-center'>
            <div className='container'>
              <p className='admission-sect-one josefin fw-400 fs-36 text-capitalize'>
                available classes for{" "}
                <span className='josefin fw-700 fs-36 text-capitalize'>
                  Admission
                </span>
              </p>
              <div className='admission-sect-two'>
                <div className='admission-sect-two-item'>
                  <p> Creche</p>
                  <p>Kindergaten</p>
                  <p>Pre-school</p>
                </div>
                <div className='admission-sect-two-item'>
                  <p>Nursery</p>
                  <p>Basic 1-6</p>
                  <p>After School Care</p>
                </div>
              </div>
              <h3 className='josefin mt-4'>We Also Have</h3>
              <div className='admission-sect-two'>
                <div className='admission-sect-two-item'>
                  <p> Small class size</p>
                  <p>Well-equipped ICT & Science Lab</p>
                </div>
                <div className='admission-sect-two-item'>
                  <p>Up-to-Date Curriculum</p>
                  <p>Serene & Secured environment</p>
                </div>
              </div>
            </div>
          </section>

          <section className='container news-sect mt-5'>
            <p className='josefin fw-400 fs-36'>
              Brighter Dawn <span className='josefin fw-700 fs-36'>News</span>
            </p>
            <div className='news-sect-item d-lg-grid'>
              <NewsIntroComp />
            </div>
          </section>

          <section className='mt-5 event pt-5 pb-5'>
            <div className='container'>
              <p className='josefin fs-36 fw-400 text-capitalize'>
                brighter dawn
              </p>
              <p className='josefin fs-36 fw-700 text-capitalize'>
                upcoming events
              </p>
              <div className='event-sect'>
                <EventIntroComp />
              </div>
              <div className=' d-flex bit '>
                <Link href='/events'>
                  <a>
                    <button className=' btn btn-outline-dark btn-lg fs-18 fw-500 text-capitalize mt-4'>
                      see all
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section className='text-center testimonial pb-5'>
            <div className='container'>
              <p className='josefin fw-700 fs-36 text-capitalize'>
                happy parents
              </p>
              <CarouselComp />
            </div>
          </section>

          <section className='award-sect p-3'>
            <div className='container'>
              <p className='josefin fs-36 fw-700 text-capitalize'>
                awards & signatories
              </p>
            </div>
          </section>

          <section className='container contact d-flex flex-column flex-lg-row justify-content-lg-between px-0'>
            <div className='left px-3'>
              <p className='josefin fs-36 fw-700 text-capitalize'>contact us</p>
              <p className='fs-14'>
                Want to Know More About Brighter Dawn,
                <br /> Ready To Get started
              </p>
              <p className='fs-14'>
                <i className=' fa fa-phone-alt me-3'></i>
                +2348171248394 &nbsp; &nbsp; +2348186126136
              </p>
              <p className='fs-14'>
                <i className=' fa fa-envelope me-3'></i>
                info.brighterdawn@gmail.com &nbsp; &nbsp; info.bdmis@gmail.com
              </p>
              <p className='fs-14'>
                <i className=' fa fa-map-marker-alt me-3'></i>
                Okuru/Abuloma By-pass, Off Peter Odili Road, Port Harcourt,
                Rivers State.
              </p>
              <p className=''>
                <ul className=' social-icons p-0 mb-5'>
                  <li>
                    <Link href=''>
                      <a href=''>
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
                    <Link href=''>
                      <a href=''>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          width={20}
                          style={{ color: "black" }}
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href=''>
                      <a href=''>
                        <FontAwesomeIcon
                          icon={faInstagramSquare}
                          width={20}
                          style={{ color: "black" }}
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href=''>
                      <a href=''>
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
                src='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63609.16965271174!2d6.972979090750357!3d4.8431163996701905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d4.8671595!2d7.0390912!4m5!1s0x1069cf009320d8c7%3A0x7bd8503914ca9237!2sbrighter%20dawn%20montessori!3m2!1d4.8300344!2d6.9799232!5e0!3m2!1sen!2sus!4v1636756136088!5m2!1sen!2sus'
                // width="600"
                // height="450"
                style={{ border: 0 }}
                loading='lazy'
                allowFullScreen></iframe>
            </div>
            <div className='right'>
              <p className='josefin fs-36 fw-400'>Send Us a Message</p>
              <form action='' className=''>
                <div className=' d-flex mb-4'>
                  <input
                    type='text'
                    placeholder='Name'
                    className=' form-control me-5'
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    className=' form-control'
                  />
                </div>
                <div className=' d-flex mb-4'>
                  <input
                    type='email'
                    placeholder='Email'
                    className=' form-control me-5'
                  />
                  <input
                    type='text'
                    placeholder='Category'
                    className=' form-control'
                  />
                </div>
                <textarea
                  placeholder='Message'
                  className=' form-control pb-5'></textarea>
                <div className=' d-flex justify-content-end'>
                  <button className=' btn btn-lg bg-primary mt-5 text-capitalize'>
                    submit
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className=' container mt-5 newsletter d-flex align-items-center flex-column justify-content-center flex-md-row'>
            <div className='left'>
              <p className='fs-48 fw-500 text-capitalize mb-0'>newsletter</p>
            </div>
            <div className='right p-3 d-flex'>
              <input
                type='text'
                placeholder='Your Email Here'
                className=' form-control-lg p-2 px-3'
              />
              <button className='btn btn-lg px-3'>send</button>
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
    desc: "We have a fully stocked library, a 21st century compliant ICT Lab and science Lab etc..",
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
    title: "music club",
  },

  {
    title: "ballet club",
  },

  {
    title: "cultural display",
  },

  {
    title: "coding club",
  },

  {
    title: "arts and craft",
  },
  {
    title: "abacus club",
  },
];

const properties = [
  {
    title: "ICT Laboratory",
  },
  {
    title: "Science Laboratory ",
  },
  {
    title: "Food Processing ",
  },
  {
    title: " Sport center",
  },
];
