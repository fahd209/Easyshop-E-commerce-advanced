import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Button, FormLabel } from '@mui/material';
import OrderSummaryItem from './OrderSummaryItem';
import './Cart.css'

const Checkout = ( { data } ) => {

  const calculateTotal = () => {
    return data.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };


  return (
    <div className='checkout-container'>
          <Paper elevation={1} sx={{width: '90%', height: '80%'}}>
            <h4>Order Summary</h4>
            <div className='orderSummary-container'>
              <div className='orderSummary'>
              { 
                data.map((item, index) => (
                  <OrderSummaryItem
                  key={index}
                  name={item.productName}
                  quantity={item.quantity}
                  price={item.price}
                />
                ))
              }
                
              </div>
              <div className='total-container'>
                <h4>Total: </h4>
                <h4>${calculateTotal()}</h4>
              </div>
              <div className='checkout-buttons'>
                <Button sx={{width: '45%'}} variant='outlined' >Clear cart</Button>
                <Button sx={{width: '45%'}} variant='contained' >Check out</Button>
              </div>
            </div>
          </Paper>
    </div>
  )
}

export default Checkout
