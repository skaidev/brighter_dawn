import React from "react";

const UpcomingEventComp = () => {
  return (
    <div className="">
      <div className="overview">
        <div className="top">
          <p className="josefin fs-24 fw-700 text-capitalize">
            upcoming events
          </p>
          <p className=" fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id iusto
            a tempore voluptatem nobis beatae commodi dolorum earum! Quia.
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
  );
};

export default UpcomingEventComp;

const EventCal = () => {
	return (
		<div className="right-base d-flex align-items-center">
			<img src="/images/eventCal.svg" style={{ width: "15px" }} alt="" />
			<p className=" mb-0 fs-12 p1">23rd May</p>
			<p className=" mb-0 p2">Childrens Day Event</p>
		</div>
	);
};
