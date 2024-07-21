import { BorderBottom } from '@mui/icons-material';
import { Box, Button, Grid, Tab, Tabs, TextField, useMediaQuery, useTheme } from '@mui/material'
import WishListProductCard from './WishListProductCard'
import React, { useState } from 'react'

const WishList = () => {

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
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

  const gridStyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif',
  };

  const headerGrid = {
    textAlign: 'center',
    padding: '10px 0 10px 0',
    borderBottom: '1px solid white',
  };

  let imageUrl = "";
  try {
    imageUrl = require(`../../images/products/`);
  } catch (error) {
    imageUrl = require(`../../images/products/no-image.jpg`); // Fallback to default image if the specific image is not found
  }

  return (
    <Grid container sx={gridStyle} >
      <Grid style={headerGrid} item xs={12} >
        <h1>Wish list</h1>
      </Grid>  
      <Grid sx={{height: '100vh',
                display: 'flex',
                overflow: 'auto',
                padding: '10px'}} 
                item xs={12}>
        <div className='container' style={{overflow: 'auto'}}>
        {
          cartItems.map((item, index) => (
            <WishListProductCard
              key={index}
              id={item.id}
              name={item.productName}
              quantity={item.quantity}
              price={item.price}
              description={item.description}
             />
          ))
        }
        </div>
      </Grid>
    </Grid>
  )
}

export default WishList
