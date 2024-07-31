import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Drawer 
    , IconButton
    , List
    , ListItemIcon
    , ListItemButton
    , ListItemText
    } from '@mui/material';
import { DisplaySettings } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const DrawerComp = () => {
    const { isLoggedIn, logout } = useAuth();
    const [openDrawer, setOpenDrawer] = useState(false);
    const PAGES = ["Home", "Shop", "About", "Register", "Login"];
    const PATHS = ["/", "/shop", "/about", "/register", "/login"];

    const handleLogout = () => {
        setOpenDrawer(false);
        logout();
    }


  return (
    <React.Fragment> 
        <Drawer 
            open={openDrawer} // opens on wetheir the openDrawer state is true or false
            onClose={() => setOpenDrawer(false)}
            sx={{width: 250, '& .MuiDrawer-paper': {width: 250}}}
        >
            <List>
                <ListItemButton component={Link} to="/" onClick={() => setOpenDrawer(false)}> 
                    <ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton component={Link} to="/shop" onClick={() => setOpenDrawer(false)}> 
                    <ListItemIcon>
                            <ListItemText>Shop</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton component={Link} to="/about" onClick={() => setOpenDrawer(false)}> 
                    <ListItemIcon>
                            <ListItemText>About</ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                {/* Switching removing register and login when user is logged in */}
                {
                    !isLoggedIn() ? (
                        <>
                        <ListItemButton component={Link} to="/register" onClick={() => setOpenDrawer(false)}> 
                            <ListItemIcon>
                                    <ListItemText>Register</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton component={Link} to="/login" onClick={() => setOpenDrawer(false)}> 
                            <ListItemIcon>
                                <ListItemText>Login</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        </>
                    ) : (
                        <>
                        <ListItemButton component={Link} to="/cart" onClick={() => setOpenDrawer(false)}> 
                            <ListItemIcon>
                                    <ListItemText>Cart</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/profile" onClick={() => setOpenDrawer(false)}> 
                            <ListItemIcon>
                                    <ListItemText>profile</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton onClick={handleLogout}> 
                            <ListItemIcon>
                                    <ListItemText>Logout</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        </>
                    )
                }
            </List> 
        </Drawer>

        <IconButton sx={{marginLeft: 'auto'}} color='inherit' onClick={()=> setOpenDrawer(!openDrawer)}> {/* once the button is clicked the drawer useState will the be oppsite what it was */}
            <MenuIcon />
        </IconButton>

    </React.Fragment>
  )
}

export default DrawerComp
