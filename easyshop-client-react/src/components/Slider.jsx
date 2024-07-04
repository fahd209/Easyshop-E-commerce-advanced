import React from 'react'
import '../styles/Slider.css'
import ProductCard from './ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  smallDeskTop: {
    breakpoint: { max: 1300, min: 1000 },
    items: 3,
    partialVisibilityGutter: 35 
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
  }
}

const Slider = () => {
  
  return (
    <div className='carousel-div-cantainer' style={{background: '#063970'}}>
    <Carousel containerClass="carousel-container container"
     responsive={responsive}
     showDots={true}
     removeArrowOnDeviceType={["tablet", "mobile"]}
     >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Carousel>
    </div>
  )
}

export default Slider
