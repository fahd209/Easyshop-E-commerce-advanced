import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link } from 'react-router-dom';
import { Drawer 
    , IconButton
    , List
    , ListItemIcon
    , ListItemButton
    , ListItemText
    } from '@mui/material';
import { DisplaySettings } from '@mui/icons-material';


    const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const PAGES = ["Home", "Shop", "Place holder", "About", "Register", "Login"]
    const PATHS = ["/", "/shop", "/place holder", "/about", "/register", "/login"]


  return (
    <React.Fragment> 
        <Drawer 
            open={openDrawer} // opens on wetheir the openDrawer state is true or false
            onClose={() => setOpenDrawer(false)}
            sx={{width: 250, '& .MuiDrawer-paper': {width: 250}}}
        >
            <List>
            {
                PAGES.map((page, index) => (
                <ListItemButton key={index} component={Link} to={PATHS[index]} onClick={() => setOpenDrawer(false)}> 
                    <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))       
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
