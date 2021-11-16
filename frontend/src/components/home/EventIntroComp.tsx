import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { IEvent } from "interface/event.interface";

interface IProp {
    event: IEvent;
  }

const EventIntroComp = ({ event }: IProp) => {
  return (
    <Wrapper>
      <div className="event-sect-img me-3">
        <img src={event?.image?.url} className=" img-fluid" alt="" />
        <ul className=" d-flex justify-content-between p-0">
          <li className="fs-12 px-1">{event?.title}</li>
          <li className="fs-12">
            <i className=" fa fa-calendar-alt me-2"></i>
            {event?.date}
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default EventIntroComp;

const Wrapper = styled.div``;
