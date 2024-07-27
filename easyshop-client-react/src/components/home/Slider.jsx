import React, { useEffect, useState } from 'react'
import './Slider.css'
import FeaturedItemsCard from './FeaturedItemsCard';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseUrl from '../config/baseUrl';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'
import { useMessage } from '../alerts/MessageContext'

const Slider = () => {
  const { displayMessage } = useMessage()
  const { currentUser } = useAuth()
  const [featuredItemData, setFeaturedItemData] = useState([{}])

  // get req to backend for featuredItem
  useEffect(()=> {
    const url = `${baseUrl}/products/featured`
    axios.get(url)
      .then(response => {
        setFeaturedItemData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const handleAddToCart = (id) => {
    const url = `${baseUrl}/cart/products/${id}`;
    axios.post(url, {}, {
      headers: { // passing the current user token every time the req is called
              'Authorization': `Bearer ${currentUser.token}`,
            },
    })
    .then(resonse => {
      console.log(resonse.data);
      displayMessage("Product added to cart", "success")
    })
    .catch(err => {
      displayMessage("Failed to add product to cart", "error")
    })
  }

  return (
   <div className='carousel'>
    <h1>Featured products</h1>
       <SlickSlider {...settings} className='slides-container' >

       {
        featuredItemData.map((product, index) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FeaturedItemsCard
              id={product.productId}
              productName={product.name}
              price={product.price}
              categoryId={product.categoryId}
              quantity={product.stock}
              imageUrl={product.imageUrl}
              onAddToCart={handleAddToCart}
             />
          </div>
        ))
       }
    </SlickSlider>
   </div>
  )
}

export default Slider
