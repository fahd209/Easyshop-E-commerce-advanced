import React from 'react'
import './register.css'
import { Button, Paper, TextField, styled } from '@mui/material'
import { Padding } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Register = () => {
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
    margin: '5px'
  });

  return (
    <div className='registerPage'>
      <Paper elevation={2} className='form-paper' sx={{backgroundColor: 'f0f0f0'}} >
        
        <form className='register-form'>
        <h1>Sign up</h1>
          <div className='text-field'>
            <CustomTextField
                id="username-input"
                label="Username"
                type="input"
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
                autoComplete="current-password"
                variant="filled"
              />

            <CustomTextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <CustomTextField
                id="confirmed-password-input"
                label="Confirm passowrd"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <p><Link to='/login'>Already have an account? Login</Link></p>
          </div>
          <div className='form-buttons'>
            <Button
              sx={{
                backgroundColor: '#063970',
                width: '300px',
                color: 'white'
              }}
            >Sign up</Button>

          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Register
