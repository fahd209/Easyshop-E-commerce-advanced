import React from 'react'
import CategoriesRadio from './CategoriesRadio'
import PriceRangeSwiper from './PriceRangeSwiper'
import ColorDropDown from './ColorDropDown'
import SortByDropDown from './SortByDropDown'
import Paper from '@mui/material/Paper';
import './Shop.css'

const Filter = () => {
  return (
    <div className='filter'>
      <Paper elevation={0} sx={{backgroundColor: '#063970', height: '95%'}}>
            <h3>Filter</h3>
          <div className='category-contanier'>
              {/* Category list options */}
              <CategoriesRadio />
          </div>
          <div className='priceRange-container'>
              {/* Price range swipers */}
              <PriceRangeSwiper />
          </div>
          <div className='colorOption-contanier' >
              {/* Color list options */}
              <ColorDropDown />
          </div>
          <div className='sort-container'>
            <SortByDropDown />
          </div>
        </Paper>
    </div>
  )
}

export default Filter
