import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Button, FormLabel } from '@mui/material';
import OrderSummaryItem from './OrderSummaryItem';
import './Cart.css'

const Checkout = ( { data, cartData, onClearCart, onCheckOut } ) => {
  return (
    <div className='checkout-container'>
          <Paper elevation={1} sx={{width: '90%', height: '80%'}}>
            <h4>Order Summary</h4>
            <div className='orderSummary-container'>
              <div className='orderSummary'>
              {/* Mapping data to orderSummaryItem */}
              { 
                data.map((item, index) => (
                  <OrderSummaryItem
                  key={index}
                  name={item.product.name}
                  quantity={item.quantity}
                  price={item.lineTotal}
                />
                ))
              }
                
              </div>
              <div className='total-container'>
                <h4>Total: </h4>
                <h4>${cartData.total}</h4>
              </div>
              <div className='checkout-buttons'>
                <Button sx={{width: '45%'}} onClick={onClearCart} variant='outlined' >Clear cart</Button>
                <Button sx={{width: '45%'}} onClick={onCheckOut} variant='contained' >Check out</Button>
              </div>
            </div>
          </Paper>
    </div>
  )
}

export default Checkout
