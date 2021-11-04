import React from 'react'

export interface IHomeCard{
    image: string;
    title: string;
    desc: string;
}

const CardList = ({ card }:{card:IHomeCard}) => {
    return (
            // <div className='cards-item mb-3 mx-lg-1 p-2'>
            // <img src={card?.image} alt="" />
            // <p className=' fs-18 fw-400 text-capitalize'>{card?.title}</p>
            // <p className=' fs-14 fw-light'>{card?.desc}</p>
            // </div>
            <div className="cards-item mr-6 ml-6 container pt-3">
                <img src={card?.image} alt="" />
                <p>{card?.title}</p>
                <p>{card?.desc}</p>
            </div>
    )
}

export default CardList;


