import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from '../images/logo4.png';
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Button } from '@mui/material';
import DrawerComp from './DrawerComp';
import Home from './Home';
import ProductsPage from './ProductsPage';
import About from './About';
import Login from './Login';
import Register from './Register';

function Header() {
    const [value, setValue] = useState(); // sets the value for the tables value
    const theme = useTheme(); // getting the media query
    const isMatch = useMediaQuery(theme.breakpoints.down('md')); // .down = (max-width). sets match to true if breakpoint of the screen matches md


  return (
    <Router>
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
                onChange={(e, value) => setValue(value)} // <== getting event value and storing it to the value state
                > 
                  <Tab label='home' component={Link} to='/' />
                  <Tab label='products' component={Link} to='/products' />
                  <Tab label='place holder' component={Link} />
                  <Tab label='about' value='/about' component={Link} to='/about' />
                </Tabs>
              
                <Button color='inherit' component={Link} to='/register' sx={{marginLeft: 'auto'}}>Register</Button>
                <Button color='inherit' component={Link} to='/login' > Login </Button>

              </>
            )}

        </Toolbar>
      </AppBar>
      <Routes>
            <Route path='/' Component={Home} />
            <Route path='/products' Component={ProductsPage} />
            <Route path='/about' Component={About} />
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register} />
      </Routes>
    </Router>
  )
}

export default Header
