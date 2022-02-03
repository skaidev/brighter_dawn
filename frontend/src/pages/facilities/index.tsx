import FrontLayout from "layout/FrontLayout";
import HeaderComp from "components/HeaderComp";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FacilitiesPage = () => {
  return (
    <FrontLayout>
      <Wrapper className='facilitiespage'>
        <div>
          <HeaderComp />
        </div>
        <section className='container'>
          <div className='building d-flex same-style'>
            <img src='/images/BDMIS building jpg-01 (1) 1.png' alt='' />
            <div className='text-content'>
              <p className='text-capitalize fs-24 fw-400 success'>
                brighter dawn facilities
              </p>
              <p className='fw-light fs-14'>
                ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut .Lorem psum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem psum tsum t” veniam,
                quis nostrud exercitation ullamco laboris nisi ut .Lorem ipsum
                t” ipsum t tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut .Lorem ipsum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut .Lorem
                ipsum t” veniam, quis nostrud exercitation ullamco laboris nisi
                ut .Lorem
              </p>
            </div>
          </div>

          <div className='library d-flex same-style'>
            <img src='/images/library jpg-01 1.png' alt='' />
            <div className='text-content'>
              <p className='text-capitalize fs-24 fw-400 success'>
                Our Library Facility comes with modern Curriculum{" "}
              </p>
              <p className='fw-light fs-14'>
                ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut .Lorem psum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem psum tsum t” veniam,
                quis nostrud exercitation ullamco laboris nisi ut .Lorem ipsum
                t” ipsum t tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut .Lorem ipsum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem
              </p>
            </div>
          </div>

          <div className='information container'>
            <p className='text-capitalize fs-24 fw-400 mb-4 success'> Our Information Technology center (IT) for our pupil</p>
            <img src='/images/Frame 10067.png' alt='' />
            <p className='fw-light fs-14 text-content text-center'>
              ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco
              laboris nisi ut .Lorem psum t” veniam, quis nostrud exercitation
              ullamco laboris nisi ut .Lorem psum tsum t” veniam, quis nostrud
              exercitation ullamco laboris nisi ut. Lorem ipsum t” ipsum t
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              .Lorem ipsum t” veniam, quis nostrud exercitation ullamco laboris
              nisi ut .Lorem
            </p>
          </div>
           
          <div className='playground d-flex same-style'>
            <img src='/images/playground jpg-01 1.png' alt='' />
            <div className='text-content'>
              <p className='text-capitalize fs-24 fw-400 success'>
              Children Playground to have an awesome fun time 
              </p>
              <p className='fw-light fs-14'>
                ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut .Lorem psum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem psum tsum t” veniam,
                quis nostrud exercitation ullamco laboris nisi ut .Lorem ipsum
                t” ipsum t tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut .Lorem ipsum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut .Lorem
                ipsum t” veniam, quis nostrud exercitation ullamco laboris nisi
                ut .Lorem
              </p>
            </div>
          </div>

          <div className='hall d-flex same-style'>
            <img src='/images/multi purpose hall jpg-01 1.png' alt='' />
            <div className='text-content'>
              <p className='text-capitalize fs-24 fw-400 success'>
              Our muiti-purpose hall for extra curriculum activities
              </p>
              <p className='fw-light fs-14'>
                ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut .Lorem psum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem psum tsum t” veniam,
                quis nostrud exercitation ullamco laboris nisi ut .Lorem ipsum
                t” ipsum t tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut .Lorem ipsum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut .Lorem
                ipsum t” veniam, quis nostrud exercitation ullamco laboris nisi
                ut .Lorem
              </p>
            </div>
          </div>

          <div className='science d-flex same-style'>
            <img src='/images/pupils in the science lab jpg-01 1.png' alt='' />
            <div className='text-content'>
              <p className='text-capitalize fs-24 fw-400 success'>
              Science laboratory
              </p>
              <p className='fw-light fs-14'>
                ipsum t tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .Lorem ipsum t tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut .Lorem psum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem psum tsum t” veniam,
                quis nostrud exercitation ullamco laboris nisi ut .Lorem ipsum
                t” ipsum t tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut .Lorem ipsum t” veniam, quis nostrud
                exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut .Lorem
                ipsum t” veniam, quis nostrud exercitation ullamco laboris nisi
                ut .Lorem
              </p>
            </div>
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
              Okuru/Abuloma By-pass, Off Peter Odili Road, Port Harcourt, Rivers
              State.
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
  );
};

export default FacilitiesPage;

const Wrapper = styled.div``;
