import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { IEvent } from "interface/event.interface";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "apollo/queries/event.query";

const UpcomingEventComp = () => {
  const [events, setEvents] = useState<IEvent[]>();
  const {loading} = useQuery(GET_EVENTS, {
    variables:{limit: 4},
    onCompleted:(data) =>setEvents(data?.events),
    onError:(err)=>console.log(err)
  })

  if(loading) return <p>Loading...</p>
  return (
    <Fragment>
      {
        events?.map((event, i) =>(
          <SingleEventItem key={i} event={event} />
        ))
      }
    </Fragment>
  )
};

export default UpcomingEventComp;

const Wrapper = styled.div`
  .eventcal {
    .left {
      img {
        width: 100%;
      }
    }
  }
`;

const SingleEventItem = ({event}: {event:IEvent}) => (
  <Wrapper className="eventpage">
      <div className="eventcal d-flex flex-column flex-lg-row mb-3">
        <div className="left">
          <img src={event?.image.url} className=" img-fluid" alt="" />
        </div>
        <div className="right p-4">
          <div className=" d-flex justify-content-between eventcal-top">
            <p className="fs-12 left">
              <span className=" me-2">
                <FontAwesomeIcon icon={faCalendarAlt} width={13} />
              </span>
              {dayjs(event?.createdAt).format("YYYY MMM D")}
            </p>
          </div>
          <Link href={`/events/${event?.slug}`}>
            <a className=" text-decoration-none" style={{ color: "#000" }}>
              <p className="josefin fs-24 fw-700">{event?.title}</p>
            </a>
          </Link>
          <p className="fs-14">{event?.description}...</p>
        </div>
      </div>
    </Wrapper>
)