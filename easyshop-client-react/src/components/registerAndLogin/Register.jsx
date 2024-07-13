import React, { useState } from 'react'
import './register.css'
import './login.css'
import { Button, Paper, TextField, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
  const [formInfo, setFormInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassowrd = () => setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormInfo({
      ...formInfo,
      [name]:value
    })
  }

  return (
    <div className='registerPage'>
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
              id="email-input"
              label="Email"
              type="input"
              name='email'
              value={formInfo.email}
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
                width: '320px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#063970',
                  opacity: 0.8,
                }
              }}
            >
            Register</Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Login