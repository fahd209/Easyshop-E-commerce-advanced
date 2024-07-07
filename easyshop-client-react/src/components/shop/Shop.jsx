import { Grid } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import CategoriesRadio from './CategoriesRadio'

const Shop = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ height: '100vh', border: '5px solid black', marginTop: '64px'}}>
        <Grid item xs={3} sx={{height: '100%', backgroundColor: '#e5eae8'}} >
        <div className='filter'>
          <div className='searchBar'>
            <SearchBar />
          </div>
          <div className='category-contanier'>
            {/* Category list options */}
            <CategoriesRadio />
          </div>

          <div className='priceRange-contanier'>
            {/* Price range swipers */}
          </div>

          <div className='colorOption-contanier' >
            {/* Color list options */}
          </div>
        </div>
        </Grid>
        <Grid item xs={9} sx={{height: '100%', border: '5px solid green', backgroundColor: '#e5eae8'}}>
          {/* Products */}
        </Grid>
      </Grid>
    </div>
  )
}
export default Shop
