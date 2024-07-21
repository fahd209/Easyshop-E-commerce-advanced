import React, { useState } from 'react'
import './register.css'
import { Button, Paper, TextField, styled, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import baseUrl from '../config/baseUrl'


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

const Register = () => {
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
    confirmpassword: ''
  })

  // useState for the showPassword Icon
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  // handling showPassword icon click event
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassowrd = () => setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handling the change of the forms
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormInfo({
      ...formInfo,
      [name]:value
    })
  }

  // getting the mediaQuery
  const theme = useTheme();
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  // api register request
  const register = async () => {
    // setting the endpoint and the register info
    const url = `${baseUrl}/register`;
    const registerData = {
      username: formInfo.username,
      password: formInfo.password,
      confirmPassword: formInfo.confirmpassword,
      role: "user"
    }

    try {
      // sending post request to register
      const response = await axios.post(url, registerData)
      console.log(response.message)
    } catch (err) {
      console.log(`Error message: ${err.message}`)
    }
    setFormInfo({
      username: '',
      password: '',
      confirmpassword: ''
    })
  }

  return (
    <div className='registerPage'>
      <Paper elevation={2} className='form-paper' sx={{ backgroundColor: 'f0f0f0' }} >
        <form className='register-form' >
          <h1>Register</h1>
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

            <CustomTextField
              id="confirmPassword-input"
              label="Confirm password"
              name='confirmpassword'
              onChange={handleFormChange}
              value={formInfo.confirmpassword}
              type={showConfirmedPassword ? 'text' : 'password'}
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmedPassowrd}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: '#eaeaea' }
              }}
            />
            <p><Link to='/login'>Already have an account? Login</Link></p>
          </div>
          <div className='form-buttons'>
            <Button
              sx={{
                backgroundColor: '#063970',
                width: isScreenMedium ? '156px' : '320px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#063970',
                  opacity: 0.8,
                }
              }}
              onClick={register}
            >
            Register</Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Register