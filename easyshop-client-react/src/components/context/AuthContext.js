import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(() => {
        // getting user if logged in
        const savedUser = localStorage.getItem('user');
        console.log('savedUser from localStorage:', savedUser);
        return savedUser ? JSON.parse(savedUser) : null;
      });

    const saveUser = (user) => {
        const userData = {
            token: user.token,
            userId: user.user.id,
            username: user.user.username,
            role: user.user.authorities[0].name,
        };
        // saving the current user to localStorage
        setCurrentUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common = {'Authorization': `Bearer ${userData.token}`} // adding token to header
    };

    const logout = () => {
        localStorage.removeItem('user')
        setCurrentUser(null)
        axios.defaults.headers.common = {'Authorization': `bearer ${currentUser.token}`} // removing token from header
        window.dispatchEvent(new Event("user-changed")); // making a new event
        
    }

    const isLoggedIn = () => {
        return currentUser !== null;
    }

    return (
        <AuthContext.Provider value={{ currentUser, saveUser, isLoggedIn, logout }}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);