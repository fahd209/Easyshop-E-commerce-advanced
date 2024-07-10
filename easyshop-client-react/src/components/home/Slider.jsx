import React from 'react'
import './Slider.css'
import FeaturedItemsCard from '../FeaturedItemsCard';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      }
    ]
  };

  return (
   <div className='carousel'>
    <h1>Featured products</h1>
       <SlickSlider {...settings} className='slides-container' >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FeaturedItemsCard />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FeaturedItemsCard />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FeaturedItemsCard />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FeaturedItemsCard />
        </div>
    </SlickSlider>
   </div>
  )
}

export default Slider
