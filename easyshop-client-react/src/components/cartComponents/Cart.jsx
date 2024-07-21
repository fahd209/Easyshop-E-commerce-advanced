import React, { useState } from 'react'
import CartHeader from './CartHeader'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import { Margin } from '@mui/icons-material';
import CartProductCard from './CartProductCard';
import Checkout from './Checkout';

const Cart = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const gridSyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif'
    
  }

  const headerGrid = {
    height: '10vh',
    width: '100%',
    borderBottom: '1px solid white',
    display: 'flex',
    justContent: 'center',
    alignItems: 'center'
  }

  const productGrid = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    borderRight: '1px solid white',

  }

  const checkOutGrid = {
    height: '100vh',
    display: 'flex',
    overflow: 'auto',
    justContent: 'center',
    // alignItems: 'center'
  }

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productName: 'Head phones',
      quantity: 1,
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      price: 20.00
    },
    {
      id: 2,
      productName: 'smart phone',
      quantity: 1,
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      price: 700.00
    },
    {
      id: 3,
      productName: 'shorts',
      quantity: 4,
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      price: 10.00
    },
  ])

  // catching the id of the quantity that's being decreased
  const decrease = (id) => {
    // mapping through the items list
    setCartItems(prevItem => 
      prevItem.map(item => 
        // checking if the id matches and decreasing the quantity if its greated then zero
        item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
      )
    )
  }

  const increase = (id) => {
    setCartItems(prevItem => 
      prevItem.map(item => 
        item.id === id ? {...item, quantity: item.quantity + 1 } : item
      )
    )
  }


  return (
    <Grid container sx={gridSyle}>
      <Grid xs={12} sx={headerGrid}>
        <CartHeader />
      </Grid>
      <Grid xs={9} sx={productGrid}>
        <div className='product-container'>
        {
          cartItems.map((item, index) => (
            <CartProductCard
              key={index}
              id={item.id}
              name={item.productName}
              quantity={item.quantity}
              price={item.price}
              description={item.description}

              // product card decrease and increase function props
              onDecrease={decrease}
              onIncrease={increase}
             />
          ))
        }
          
        </div>
      </Grid>
      <Grid xs={3} sx={checkOutGrid}>
        <Checkout
          data={cartItems}
         />
      </Grid>
    </Grid>
  )
}

export default Cart
