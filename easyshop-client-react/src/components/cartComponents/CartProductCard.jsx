import React, { useState } from 'react'
import { Button } from '@mui/material';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './Cart.css'


const CartProductCard = ( props ) => {

  let imageUrl = "";
  try {
    imageUrl = require(`../../images/products/${props.imageUrl}`);
  } catch (error) {
    imageUrl = require(`../../images/products/no-image.jpg`); // Fallback to default image if the specific image is not found
  }

  const [quantity, setQuantity] = useState(props.quantity);

  const handleDecrease = () => {
    if(quantity > 0){
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      props.onDecrease(props.id, newQuantity); // passing the id to on decrease function
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    props.onIncrease(props.id, newQuantity);
  };

  const handleRemoveItem = (e) => {
    e.preventDefault();
    props.onRemoveItem(props.id);
  }


  return (
    <MDBCard className="shadow-0 border rounded-3 mt-3" style={{ width: '90%' }}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0" style={{display: 'flex'}}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
          </MDBCol>
          <MDBCol md="6" className=" d-flex flex-column justify-content-between ">
            <h2>{props.name}</h2>
            <div className="d-flex flex-row">
              <div className="text-danger mb-1 me-2">
              </div>
              <span></span>
            </div>
            <p className=" mb-4 mb-md-0">
              {props.description}
            </p>
          </MDBCol>
          <MDBCol
            md="6"
            lg="3"
            className="border-sm-start-none border-start d-flex flex-column justify-content-between "
          >
            <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">${props.price}</h4>
            </div>
            <div className='quantity-container'>
              <Tooltip>
                <IconButton onClick={handleDecrease}>
                  <RemoveOutlinedIcon />
                </IconButton>
              </Tooltip>
              <input value={quantity} />
              <Tooltip>
                <IconButton onClick={handleIncrease} >
                  <AddOutlinedIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="d-flex flex-column mt-4">
              <Button variant="contained" onClick={handleRemoveItem}>
                Remove
              </Button>
              <Button
                outline
                variant="outlined"
                size="sm"
                className="mt-2"
                onClick={(e) => e.preventDefault()}
              >
                Add to wish list
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  )
}

export default CartProductCard
