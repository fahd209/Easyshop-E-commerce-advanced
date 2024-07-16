import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Filter from './Filter'
import SearchBar from './SearchBar'
import FilterDrawer from './FilterDrawer'
import './Shop.css'
import TuneIcon from '@mui/icons-material/Tune';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ProductsCard from './ProductsCard'

const Shop = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => { // sets usestate the oppsite of what it is
    setIsDrawerOpen(!isDrawerOpen)
  }

  // grid styles
  const gridSyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif'
  }

  const headerGrid = {
    height: '10vh',
    width: '100%',
    borderBottom: '1px solid white'
  }

  const deskTopProductGrid = {
    height: '100vh',
    display: 'flex',
    overflow: 'auto'
  }

  const productContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px'
  }

  const mobileProductGrid = {
    height: '90vh',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'auto',
    gap: '5px'
  }

  return (
    <Grid container spacing={2}  sx={gridSyle}>
      {/* removes side grid and renders drawer inside if the screen is small */}
      {/* Mobile screen */}
      {isMedium ? (
        <> 
          <Grid sx={headerGrid} >

              <div  className='shop-header'>
                  <Tooltip title='Toggle Filter' >
                    <IconButton onClick={toggleDrawer}  variant="contained">
                    <TuneIcon
                        sx={{color: '#063970'}}
                      />
                    </IconButton>
                  </Tooltip>
                <SearchBar />
              </div>

            </Grid>
            <Grid item xs={12} sx={mobileProductGrid}>

              <FilterDrawer open={isDrawerOpen} onClose={toggleDrawer} />
              {[...Array(14)].map((_, index) => (
                <ProductsCard key={index} className="product-card" />
              ))}

            </Grid>
        </>
        // Desktop screen 
      ) : ( 
        
        <>
          <Grid sx={headerGrid} >

            <div className='shop-header'>
              <h1>Products</h1>
              <SearchBar />
            </div>

          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: '#063970',
           height: '100vh',
            borderRight: '1px solid white',
             display: 'flex',
              justifyContent: 'center' }}>

            <Filter />
          </Grid>
          <Grid item xs={9} sx={deskTopProductGrid}>
            <div style={productContainer}>
              {[...Array(14)].map((_, index) => (
                <ProductsCard key={index} className="product-card" />
              ))}
            </div>
          </Grid>
        </>
        )}
    </Grid>
  )
}
export default Shop
