import React from 'react'
import bannerImage from '../home/bannerImage.png'

const PurposeComp = () => {
    const aboutPurposeContainer = {
        backgroundColor: '#C0C0C0'
    }

  return (
    <div style={aboutPurposeContainer} class="px-4 py-5 text-center">
        <img class="d-block mx-auto mb-4" src={bannerImage} alt="" width="100" height="100" />
        <h1 class="display-5 fw-bold text-body-emphasis">About</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4" style={{fontWeight: 'bold'}}>Welcome to Easy Shop, your go-to online store for a seamless shopping experience.
            Easy Shop is designed to offer a wide range of products with user-friendly features and a visually appealing interface.
            </p>
        </div>
    </div>
  )
}

export default PurposeComp
