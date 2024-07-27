import React from 'react'
import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import Checkout from './Checkout';

const drawerWidth = '100%'

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

const CheckOutDrawer = ({ open, onClose, data, cartData, clearCart, onCheckOut }) => {
    const paperStyle = {
      backgroundColor: '#063970',
      height: '100%',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif'
    }
  return (
    <StyledDrawer
        variant="persistent"
        anchor="right"
        open={open}
        onClose={onClose}
    >
      <Paper elevation={0} sx={paperStyle}>
        <div className='drawerFilter-header'>
          <h3 style={{ color: 'white' }}>Summary</h3>
          <Tooltip title='Close filter'>
            <IconButton onClick={onClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
            <Checkout
                cartData={cartData}
                data={data}
                onClearCart={clearCart}
            />
      </Paper>
  </StyledDrawer>
  )
}

export default CheckOutDrawer
