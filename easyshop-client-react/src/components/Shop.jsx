import { Grid } from '@mui/material'
import React from 'react'


const Shop = () => {
  return (
  <Grid sx={{marginTop: '65px'}} container spacing={2}>
      <Grid sx={{border: '1px solid black'}} direction={'column'} item xs={4}>
        <p>Filter column</p>
      </Grid>
      <Grid sx={{border: '1px solid black'}} item xs={8}>
        <p>Products</p>
      </Grid>
      <Grid sx={{border: '1px solid black'}} item xs={8}>
        <p>Product cards</p>
      </Grid>
  </Grid>
  )
}

export default Shop
