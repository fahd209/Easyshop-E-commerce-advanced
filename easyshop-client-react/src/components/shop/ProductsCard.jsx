import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
  } from "mdb-react-ui-kit";
import { Button } from '@mui/material';
import { Height } from '@mui/icons-material';

const ProductCard = () => {
    const cardSyle = { 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '250px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px 20px 20px 0'
      }
  return (
          <MDBCard style={cardSyle}>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0"></p>
            </div>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a  className="text-muted">
                    Laptops
                  </a>
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
      )
}

export default ProductCard
