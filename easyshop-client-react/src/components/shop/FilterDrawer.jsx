import React from 'react'
import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import CategoriesRadio from './CategoriesRadio'
import PriceRangeSwiper from './PriceRangeSwiper'
import ColorDropDown from './ColorDropDown'
import SortByDropDown from './SortByDropDown'
import Paper from '@mui/material/Paper';
import './Shop.css'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = '60%'

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      width: '100vw',
      height: '100vh',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#063970',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif'
    },
  }));

const FilterDrawer = ({ open, onClose }) => {
    const paperStyle = {
      backgroundColor: '#063970',
      height: '100%',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif'
    }
  return (
    <StyledDrawer
        variant="persistent"
        anchor="left"
        open={open}
        onClose={onClose}
    >
      <Paper elevation={0} sx={paperStyle}>
        <div className='drawerFilter-header'>
          <h3 style={{ color: 'white' }}>Filter</h3>
          <Tooltip title='Close filter'>
            <IconButton onClick={onClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
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
  </StyledDrawer>
  )
}

export default FilterDrawer
