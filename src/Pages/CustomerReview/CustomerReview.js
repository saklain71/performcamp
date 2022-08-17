import React, { useEffect, useState } from "react";
// import ReactStars from "react-rating-stars-component";
import {  RatingView } from 'react-simple-star-rating'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "../../styles.css";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Parallax
} from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Autoplay,Parallax]);

const CustomerReview = () => {
    const quoteRight=<FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
    const quoteLeft=<FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
   const [displayReviews,setDisplayReviews]=useState([])
   useEffect(()=>{

       fetch(`http://localhost:5000/customerReviews`)

       .then(res=>res.json())
       .then(data=>setDisplayReviews(data))
   },[])
   
    return (
        <div className='py-5'>
           <div className=' pb-5'>
           <h2 className="text-black text-4xl font-bold p-8 text-center">| Loved By HR, Managers And Employees</h2>
            <p className="text-blue-400 text-center font-bold">And gave their valuable review</p>
           </div>
   <Swiper speed={600} parallax={true} autoplay={{
    "delay": 2000,
    "disableOnInteraction": false
  }}  className="mySwiper h-96">
 {
     displayReviews.map(review=><SwiperSlide key={review.id}>
    <div className="relative text-center bg-amber-100 shadow-xl justify-center space-y-4 rounded-md bg-gray-900 p-10 text-white "> <span className="absolute left-3/4 top-16  text-3xl text-gray-600">{quoteRight}</span>
    <span className="absolute left-10 top-3/4 text-3xl text-gray-600">{quoteLeft}</span>
   <div className="flex justify-center "> <div className="w-24 border-2 border-red-500 h-24 rounded-full   overflow-hidden"> <img src={review.image} referrerpolicy="no-referrer" alt="" /></div></div>
      <h2 className='text-4xl text-black'>{review.name}</h2>
      <p className='p-5 text-rose-600'>{review.description}</p>
      <div className="flex justify-center">
     
   <RatingView ratingValue={review.rating} /* Rating Props */ />
      </div>
    </div>
   
        </SwiperSlide>)
 }
  </Swiper>
  
        <br />
        <div className="flex justify-center">
        <Link to="/addCustomerReview">
        <button className=' btn btn-error lg:w-48 w-full text-white font-bold'>Add your review</button></Link>
        </div>
        </div>
    );
};

export default CustomerReview;