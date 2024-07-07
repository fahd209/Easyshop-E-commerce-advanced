import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import Footer from '../Footer'
import './Home.css'

//import Header from './Header'
const Home = () => {

  return (
    <div className='home-contanier'>
      <Banner />
      <Slider />
      <Footer />
    </div>
  )
}

export default Home