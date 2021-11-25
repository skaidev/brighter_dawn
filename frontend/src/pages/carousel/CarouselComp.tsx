import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALS } from "apollo/queries/testimonial.query";
import { ITestimonial } from "interface/testimonial.interface";
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";



const CarouselComp = () => {
  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

   const [testimonials, setTestimonials] = useState<ITestimonial[]>();
   useQuery (GET_TESTIMONIALS, {
     onCompleted:(data) =>setTestimonials(data?.testimonials),
     onError:(err)=>console.log(err)
   })


  return (
    <Wrapper>
      <Slider {...settings}>
        {
          testimonials?.map((oneTestimony,i)=>(
            <div className="parents " key={i}>
          <div className=' d-flex align-items-center testimonial-card p-4'>
            <p className='left p-4'>
              <img src='/images/quote.svg' alt='' />
            </p>
            <p className='right p-4 lh-2 fw-light '>
              {oneTestimony?.content}
            </p>
          </div>
          
            <div className="mumu">
            <img
              src={oneTestimony?.image?.url}
              className=' img-fluid mx-2 '
              alt=''
            />
            
            </div>
            <p className="text-capitalize mt-2">{oneTestimony?.name}</p>
        
        </div>
          ))
        }
        
        
      </Slider>
    </Wrapper>
  );
};

export default CarouselComp;

export const Wrapper = styled.div`
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 50px;
  }
  


  img{
    height: 116px;
    width: 116px;
    border-radius: 50%;
  }
`;
