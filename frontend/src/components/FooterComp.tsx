import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  faFacebook,
  faLinkedin,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComp = () => {
  return (
    <Footer className="front-footer">
      <section className="container">
        <div className="footer-top mt-5 px-0 total d-flex flex-column justify-content-lg-between flex-lg-row">
          <div className="first">
            <img src="/images/logo.png" className=" mb-4" alt="" />
            <p className=" fw-light fs-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> do eiusmod tempor incididunt ut labore et dolore magna{" "}
              <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
              <br /> ullamco laboris nisi ut .
            </p>
          </div>
          <div className="second">
            <p className=" fw-700 text-capitalize">quick links</p>
            <p>
              <ul className="links p-0">
                <li>
                  <Link href="">
                    <a href="" className=" fw-light text-capitalize fs-14">
                      about us
                    </a>
                  </Link>
                  <p className="fw-400 mb-2 mt-1 px-2">News</p>
                  <p>
                    <ul className="links p-0">
                      <li>
                        <Link href="">
                          <a href="" className=" fw-light fs-14">
                            Our Classes
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a href="" className=" fw-light fs-14">
                            Recent Events
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div className="third">
            <div className=" d-flex align-items-center mb-4">
              <div className="third-1 me-4">
                <i className=" fa fa-phone-alt"></i>
              </div>
              <div>
                <p className=" mb-0 fw-700 text-capitalize">call</p>
                <p className=" mb-0 fw-light fs-14">+234 901 262 4162</p>
              </div>
            </div>
            <div className=" d-flex align-items-center mb-4">
              <div className="third-1 me-4">
                <img src="/images/clock.svg" style={{ width: "18px" }} alt="" />
              </div>
              <div>
                <p className=" mb-0 fw-700 text-capitalize">working hours</p>
                <p className=" mb-0 fw-light fs-14">
                  Mon-Fri (7:00am - 3:00pm)
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mb-4">
              <div className="third-1 me-4">
                <i className=" fa fa-envelope"></i>
              </div>
              <div>
                <p className=" mb-0 fw-700 text-capitalize">address</p>
                <p className=" mb-0 fw-light fs-14">
                  No. 6 Mission Road Elimgbu
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-btm d-flex flex-column justify-content-lg-between flex-lg-row">
          <div className="footer-btm-left">
            <p className="fs-14">
              &copy;Copyrights 2020 Shelly All rights reserved{" "}
            </p>
          </div>
          <div className="footer-btm-right">
            <p>
              <ul className=" d-flex px-0">
                <li className=" me-3">
                  <a className=" link-dark">
                    <FontAwesomeIcon icon={faFacebook} width={16} />
                  </a>
                </li>
                <li className=" mx-3">
                  <a className=" link-dark">
                    <FontAwesomeIcon icon={faLinkedin} width={16} />
                  </a>
                </li>
                <li className=" mx-3">
                  <a className=" link-dark">
                    <FontAwesomeIcon icon={faInstagramSquare} width={16} />
                  </a>
                </li>
                <li className=" mx-3">
                  <a className=" link-dark">
                    <FontAwesomeIcon icon={faTwitter} width={16} />
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer``;
