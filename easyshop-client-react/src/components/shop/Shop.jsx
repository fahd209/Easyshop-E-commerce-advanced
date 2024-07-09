import { Box, Grid, useMediaQuery, useTheme, styled } from '@mui/material'
import React, { useState } from 'react'
import Filter from './Filter'
import SearchBar from './SearchBar'
import FilterDrawer from './FilterDrawer'
import './Shop.css'
import TuneIcon from '@mui/icons-material/Tune';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const Shop = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => { // sets usestate the oppsite of what it is
    setIsDrawerOpen(!isDrawerOpen)
  }


  return (
    <Grid container spacing={2} sx={{ height: '100vh', marginTop: isSmall ? '56px' : '64px', backgroundColor: '#C0C0C0'}}>
    {/* removes side grid and renders drawer inside if the screen is small */}
    {isMedium ? (
      <> 
        <Grid sx={{ height: '10%', width: '100%', borderBottom: '2px solid white'}} >

            <div className='shop-header'>
              <Tooltip>
                <IconButton onClick={toggleDrawer}  variant="contained">
                 <TuneIcon
                    sx={{color: '#063970'}}
                  />
                </IconButton>
              </Tooltip>
              <SearchBar />
            </div>

          </Grid>
          <Grid item xs={9} sx={{height: '90vh', position: 'relative'}}>

            <FilterDrawer open={isDrawerOpen} onClose={toggleDrawer} />

          </Grid>
      </>
    
     ) : ( 
      <>
        <Grid sx={{ height: '10%', width: '100%', borderBottom: '2px solid white'}} >

          <div className='shop-header'>
            <h1>Products</h1>
            <SearchBar />
          </div>

        </Grid>
        <Grid item xs={3} sx={{ height: '90vh', borderRight: '2px solid white', position: 'relative' }}>
         
        </Grid>
        <Grid item xs={9} sx={{height: '90vh'}}>
        </Grid>
      </>
      )}
    </Grid>
  )
}
export default Shop
