import {
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FormatBold, FormatItalicOutlined, FormatUnderlined, AttachmentRounded } from "@mui/icons-material";
import { TextAreaComp } from "lib/TextAreaComp";

const SingleMessageComp = () => {
  return (
    <Wrapper className="message mt-3">
      <TableContainer className="message-content" component={Paper}>
        <TableBody>
          {messageCard.map((card, i) => (
            <TableRow className="top" key={i}>
              <TableCell className="top-first d-flex">
                <img src={card.img} alt="" />
                <div className="one">
                  <p>
                    {card.name} <span className=" mx-2">{card.time}</span>
                  </p>
                  <p>{card.desc}</p>
                  <div className="one-top">{card.desc2}</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bottom">
            <TableCell>
              <div className="bottom-first d-flex">
                <img src="/images/student.png" alt="" />
                <p>Obe Sampson</p>
              </div>
              <div className="bottom-second d-flex">
                  <div>
                  <TextAreaComp
                minRows={1}
                placeholder="Enter your message here....."
                // style={{ width: "600px" }}
                className="mt-4 p-4 pt-2 left"
              ></TextAreaComp>
              <div className="icons">
              <FormatBold />
              <FormatItalicOutlined />
              <FormatUnderlined />
              <AttachmentRounded />
              </div>
                  </div>
              <img src="/images/arrow.svg" alt="" className="right" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Wrapper>
  );
};

export default SingleMessageComp;

const Wrapper = styled.div`
  .message {
    &-content {
      .top {
        &-first {
          img {
            width: 3.125rem;
            height: 3.125rem;
            margin-right: 1rem;
          }
          .one {
            &-top {
              padding: 1rem;
              /* border-left: 3px solid #1271bb; */
              color: rgba(33, 37, 41, 0.69);
            }
          }
        }
      }
      .bottom {
        &-first {
          img {
            width: 3.125rem;
            height: 3.125rem;
            margin-right: 1rem;
          }
        }
        &-second {
            align-items: center;
            justify-content: center;
            gap: 1rem;
          .left {
            border-radius: 10px;
          }

          .icons {
              position: relative;
              bottom: 2.2rem;
          }
        }
      }
    }
  }
`;

const messageCard = [
  {
    img: "/images/student.png",
    name: "Obe Sampson",
    time: "12:10pm",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson",
    time: "12:10pm",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    desc2:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson",
    time: "12:10pm",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson",
    time: "12:10pm",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson",
    time: "12:10pm",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  //   {
  //     img: "/images/student.png",
  //     name: "Obe Sampson",
  //     time: "12:10pm",
  //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  //   },
];
