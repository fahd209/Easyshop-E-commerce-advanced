import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Drawer 
    , IconButton
    , List
    , ListItemIcon
    , ListItemButton
    , ListItemText} from '@mui/material';
import Home from './Home';
import ProductsPage from './ProductsPage';
import About from './About';
import Login from './Login';
import Register from './Register';

    const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment> 
        <Drawer 
            open={openDrawer} // opens on wetheir the openDrawer state is true or false
            onClose={() => setOpenDrawer(false)}
        >

        <List>
            <ListItemButton component={Link} to='/' onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to='/products'  onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>Products</ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>Place holder</ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to='/about' onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to='/register' onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>Register</ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to='/login' onClick={() => setOpenDrawer(false)}> 
                <ListItemIcon>
                    <ListItemText>Login</ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List> 

        </Drawer>

        <IconButton sx={{marginLeft: 'auto'}} color='inherit' onClick={()=> setOpenDrawer(!openDrawer)}> {/* once the button is clicked the drawer useState will the be oppsite what it was */}
            <MenuIcon />
        </IconButton>

    </React.Fragment>
  )
}

export default DrawerComp
