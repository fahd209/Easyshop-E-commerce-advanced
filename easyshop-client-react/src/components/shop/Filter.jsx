import React, { useState, useEffect } from 'react'
import CategoriesRadio from './CategoriesRadio'
import PriceRangeSwiper from './PriceRangeSwiper'
import ColorDropDown from './ColorDropDown'
import Paper from '@mui/material/Paper';
import './Shop.css'

const Filter = ( { handleSearchFilterChange, handlePriceRange }  ) => {
  // using the props passed from parent to childern components
  return (
    <div className='filter'>
      <Paper elevation={0} sx={{backgroundColor: '#063970', height: '95%'}}>
            <h3>Filter</h3>
          <div className='category-contanier'>
              {/* Category list options */}
              <CategoriesRadio handleSearchFilterChange={handleSearchFilterChange} />
          </div>
          <div className='priceRange-container'>
              {/* Price range swipers */}
              <PriceRangeSwiper handlePriceRange={handlePriceRange}  />
          </div>
          <div className='colorOption-contanier'>
              {/* Color list options */}
              <ColorDropDown handleSearchFilterChange={handleSearchFilterChange} />
          </div>
        </Paper>
    </div>
  )
}

export default Filter
