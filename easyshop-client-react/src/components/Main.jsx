import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';
import About from './about/About';
import Login from './registerAndLogin/Login';
import Register from './registerAndLogin/Register';
import NavigationBar from './navigationBar/NavigationBar';
import Profile from './profile/Profile';
import Cart from './cartComponents/Cart'
import wishList from './wishList/WishList'
import { useAuth } from "../components/context/AuthContext"
import { MessageProvider } from './alerts/MessageContext';

function Main() {
  const { isLoggedIn } = useAuth();
  return (
    <MessageProvider>
      <Router>
        <NavigationBar />
        <Routes>
              <Route path='/' Component={Home} />
              <Route path='/shop' Component={Shop} />
              <Route path='/about' Component={About} />
              {
                isLoggedIn() ? (
                  <>
                    <Route path='/wishlist' Component={wishList}/>
                    <Route path='/cart' Component={Cart} />
                    <Route path='/profile' Component={Profile} />
                  </>
                ) : ( 
                  <>
                    
                      <Route path='/login' Component={Login}/>
                      <Route path='/register' Component={Register} />
                  
                </>
                )
              }
        </Routes>
      </Router>
    </MessageProvider>
  )
}

export default Main
