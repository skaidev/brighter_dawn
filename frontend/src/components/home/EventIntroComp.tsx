import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { IEvent } from "interface/event.interface";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "apollo/queries/event.query";
import Link from "next/link";


const EventIntroComp = () => {
  const [events,setEvents] = useState<IEvent[]>();
  const {loading} = useQuery(GET_EVENTS, {
    variables:{limit:3},
    onCompleted:(data) =>setEvents(data?.events),
    onError:(err)=>console.log(err)
  })

  if(loading) return <p>Loading...</p>
  return (
    <Fragment>
      {
        events?.map((event,i)=>(
          <SingleEvent key={i} event={event} />
        ))
      }
    </Fragment>
  )
};


export default EventIntroComp;

const Wrapper = styled.div`
.event-sect-img{
  height: 100%;
    /* width: 100vw; */
    background: black;
    overflow: hidden;
    
}
img{
  height: 100%;
  opacity: 0.6;
}

`;

const SingleEvent = ({event}: {event:IEvent}) => (
   <Wrapper>
      <Link href={`/events/${event?.slug}`}>
      <a className="text-decoration-none">
      <div  className="event-sect-img me-3">
        <img src={event?.image?.url} className=" img-fluid" alt="" />
        <ul className=" d-flex justify-content-between p-0">
          <li className="fs-12 px-1">{event?.title}</li>
          <li className="fs-12">
            <i className=" fa fa-calendar-alt me-2"></i>
            {event?.date}
          </li>
        </ul>
      </div>
      </a>
      </Link>
    </Wrapper>
)
