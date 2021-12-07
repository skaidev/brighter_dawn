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
          <div className='science  mt-5'>
            <h5 className='josefin fs-36 fw-400 text-capitalize'>
              science laboratory center
            </h5>
            <div className='girl-text d-flex'>
              <img className='img-fluid' src='/images/Group_9899.png' alt='' />
              <div className='text-content'>
                <p className='fw-light fs-18'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut .Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  .Lorem ipsum t”
                </p>
              </div>
            </div>
          </div>
          <div className='science-image '>
            <img
              src='/images/pexels-tima-miroshnichenko-5452201 1.png'
              alt=''
            />
            <img src='/images/pexels-rfstudio-3825379 1.png' alt='' />
            <img src='/images/pexels-chokniti-khongchum-2280549 1.png' alt='' />
            <img src='/images/pexels-rfstudio-3825541 1.png' alt='' />
          </div>
        </section>

        <section className='container'>
          <div className='sports'>
            <h5 className='josefin fs-36 fw-400 text-capitalize'>
              sport and physical center
            </h5>
            <div className='sports-wrapper d-flex '>
              <div className='boy-text '>
                <img className='img-fluid' src='/images/Frame_9973.png' alt='' />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut .Lorem tempor incididunt ut labore et
                  exercitation ullamco laboris nisi ut. Loremipsum t”
                </p>
              </div>
              <div className='b-wrapper d-flex'>
                <div className='swim'>
                  <img
                    className='mb-3 '
                    src='/images/kids_swimming_1.png'
                    alt=''
                  />
                  <img
                    className=''
                    src='/images/girl_holding_ball_1.png'
                    alt=''
                  />
                </div>
                <div className='basketball'>
                  <img className='mb-3 ' src='/images/football_1.png' alt='' />
                  <img className='' src='/images/basket_court_1.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container'>
          <div className='computer  mt-5'>
            <h5 className='josefin fs-36 fw-400 text-capitalize'>
              information communication technology
            </h5>
            <div className='girl-text d-flex'>
              <img className='img-fluid' src='/images/Frame 9951.png' alt='' />
              <div className='text-content'>
                <p className='fw-light fs-18'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut .Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut .Lorem ipsum t tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  .Lorem ipsum t”
                </p>
              </div>
            </div>
          </div>
          <div className='computer-image '>
            <img
              src='/images/4535496-interior-of-classroom-with-computers 1.png'
              alt=''
            />
            <img src='/images/fixing_computer_1.png' alt='' />
            <img src='/images/classroom-projector-screen 1.png' alt='' />
            <img
              src='/images/360_F_269246962_HqzYSUKPdFWYFnvTBhrkhFBADwrIl2ds 1.png'
              alt=''
            />
          </div>
        </section>

        <section className='container'>
          <div className='food'>
            <h5 className='josefin fs-36 fw-400 text-capitalize'>
              sport and physical center
            </h5>

            <div className='food-wrapper d-flex '>
              <div className='boy-text '>
                <img className='img-fluid' src='/images/Frame_9962.png' alt='' />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut .Lorem tempor incididunt ut labore et
                  exercitation ullamco laboris nisi ut. Loremipsum t”
                </p>
              </div>
              <div className='b-wrapper'>
                <div className="top">
                    <img className='' src="/images/cooook 1 (1).png" alt="" />
                    <img className='' src="/images/kitche_1.png" alt="" />
                </div>
                <div className="bottom mt-3">
                    <img className='' src="/images/kitchen_1.png" alt="" />
                </div>
                
              </div>
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
