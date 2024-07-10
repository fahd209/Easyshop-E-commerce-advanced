import React from 'react'
import CategoriesRadio from './CategoriesRadio'
import PriceRangeSwiper from './PriceRangeSwiper'
import ColorDropDown from './ColorDropDown'
import './Shop.css'

const Filter = () => {
  return (
    <div className='filter'>
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
    </div>
  )
}

export default Filter
