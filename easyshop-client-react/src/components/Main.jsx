import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Login from './Login';
import Register from './Register';
import NavigationBar from './NavigationBar';

function Main() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
            <Route path='/' Component={Home} />
            <Route path='/shop' Component={Shop} />
            <Route path='/about' Component={About} />
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register} />
      </Routes>
    </Router>
  )
}

export default Main
