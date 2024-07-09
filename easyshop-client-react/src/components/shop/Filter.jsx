import React from 'react'
import CategoriesRadio from './CategoriesRadio'
import TuneIcon from '@mui/icons-material/Tune';

const Filter = () => {
  return (
    <div className='filter'>
        <div className='filter-header'>
          <TuneIcon />
          <h3>Filter</h3>
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
  )
}

export default Filter
