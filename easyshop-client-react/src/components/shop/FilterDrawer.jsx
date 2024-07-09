import React from 'react'
import { Drawer, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles';

const drawerWidth = 240

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
    },
  }));

const FilterDrawer = ({ open, onClose }) => {
    //const classes = useStyles()
  return (
    <StyledDrawer
        variant="persistent"
        anchor="left"
        open={open}
        onClose={onClose}
    >
    <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Filter Options</Typography>
        {/* Add Filter Options Here */}
    </Box>
  </StyledDrawer>
  )
}

export default FilterDrawer
