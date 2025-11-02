import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from './logo4.png';
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Button } from '@mui/material';
import DrawerComp from './DrawerComp';
import { useAuth } from '../context/AuthContext';
import AccountIconTools from './AccountIconTools'

const routes = {
    "/": 0,
    "/shop": 1,
    "/about": 2
  } 
const NavigationBar = () => { 
    const { isLoggedIn } = useAuth();
    const location = useLocation(); // getting the route
    const [value, setValue] = useState(); // sets the value for the tables value
    const theme = useTheme(); // getting the media query
    const isMatch = useMediaQuery(theme.breakpoints.down('md')); // .down = (max-width). sets match to true if breakpoint of the screen matches md
    
    useEffect(()=>{
        setValue(routes[location.pathname]) // setting the value of the tabs to routes value with the path name as the key
    },[location.pathname])

  return (
    <div>
      <AppBar sx={{background: '#063970'}} > 
        <Toolbar>
            <img alt='logo' style={{width: '150px', marginRight: '10px'}} src={logo} />

            {isMatch ? (
              <>
                {/* if matched is true then change the navBar to hamburger menu */}
                <DrawerComp />
              </>

            ) : (

              <>
                <Tabs 
                    TabIndicatorProps={{ sx: {backgroundColor: 'white'}}}
                    sx={{marginLeft: 'auto'}}
                    textColor='inherit' 
                    value={value} 
                > 
                  <Tab label='home' component={Link} to='/' />
                  <Tab label='Shop' component={Link} to='/shop' />
                  <Tab label='about' component={Link} to='/about' />
                </Tabs>
                
                {isLoggedIn() ? ( <AccountIconTools/> ) : ( 
                  <>
                    <Button onClick={(e) => setValue()} color='inherit' component={Link} to='/register' sx={{marginLeft: 'auto'}}>Register</Button>
                    <Button onClick={(e) => setValue()} color='inherit' component={Link} to='/login' > Login </Button>
                  </>
                 )}

              </>
            )}

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar
