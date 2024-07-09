import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const Banner = () => {
  return (
    <div style={{ backgroundColor: '#C0C0C0'}}>
        <div class=" container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Welcome to <span style={{color: '#063970'}}>Easy Shop</span></h1>
                <p class="lead">A wide range of products at unbeatable prices. Easy Shop is your go-to online store for all your shopping needs, offering a seamless and enjoyable shopping experience. Don't have an account? <Link to='/register'>Register</Link> to start shopping.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button style={{backgroundColor: '#063970'}} component={Link} to='/shop' type="button" class="btn text-light btn-lg px-4 me-md-2" fdprocessedid="03chfm">Shop now</Button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
