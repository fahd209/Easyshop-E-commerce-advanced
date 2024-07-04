import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";
import { Button } from '@mui/material';
  

const ProductCard = () => {
  return (
    <div>
          <MDBCard style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '300px'}}>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Featured Item</p>
            </div>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <Button disabled sx={{color: '#063970'}}>Add to cart</Button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
  </div>
  )
}

export default ProductCard
