import React, { useState } from 'react'
import './register.css'
import './login.css'
import { Button, Paper, TextField, styled, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import baseUrl from '../config/baseUrl'
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../alerts/MessageContext'

const CustomTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderRadius: '8px',
    backgroundColor: '#eaeaea',
  },
  '& .MuiFilledInput-root:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:after': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: 'none',
  },
  margin: '5px',
  width: '100%', // Add this line to set width to 100%
});
  

const Login = () => {

  const { displayMessage } = useMessage();

  const { saveUser } = useAuth();
  // state for the forms
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: ''
  })

  // state for the show password icon
  const [showPassword, setShowPassword] = useState(false);
  // handling the show password click
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handling the forms changes
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormInfo({
      ...formInfo,
      [name]:value
    })
  }

  // geting the mediaQuery
  const theme = useTheme();
  const isScreenMedia = useMediaQuery(theme.breakpoints.down('md'));// <= will be set to true or false depending on the condition
  const navigate = useNavigate();

  
  const handleLoginClick = async () => {
    const url = `${baseUrl}/login`;
    const loginInfo = {
      username: formInfo.username,
      password: formInfo.password
    }

    try{
      // sending login post req
       await axios.post(url, loginInfo)
        .then((res) =>{
          // saving user to useAuth custom hook
          saveUser(res.data)
          navigate("/")
          displayMessage("Login successful", "success")
          
        }, fail => {
          console.log(fail)
          displayMessage("Login failed", "error")
        })
    }
    catch(err)
    {
      console.log(err)
    }

    // setting form back to empty
    setFormInfo({
      username: '',
      password: ''
    })
  }

  return (
    <div className='LoginPage'>
      <Paper elevation={2} className='form-paper' sx={{ backgroundColor: 'f0f0f0' }} >
        <form className='loginForm' >
          <h1>Login</h1>
          <div className='text-field'>
            <CustomTextField
              id="username-input"
              label="Username"
              type="input"
              name='username'
              value={formInfo.username}
              onChange={handleFormChange}
              autoComplete="current-password"
              variant="filled"
              InputProps={{
                style: { backgroundColor: '#eaeaea' }
              }}
            />
            <CustomTextField
              id="password-input"
              label="Password"
              value={formInfo.password}
              onChange={handleFormChange}
              name='password'
              type={showPassword ? 'text' : 'password'}
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: '#eaeaea' }
              }}
            />

            <p><Link to='/register'>Don't have an account? Register</Link></p>
          </div>
          <div className='form-buttons'>
            <Button
            onClick={handleLoginClick}
              sx={{
                backgroundColor: '#063970',
                width: isScreenMedia ? '156px' : '320px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#063970',
                  opacity: 0.8,
                }
              }}
            >
            Login</Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Login