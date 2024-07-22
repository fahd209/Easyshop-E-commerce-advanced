import React from 'react'
import { Box, Button, Grid, Tab, Tabs, TextField, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material'

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
    width: '100%', 
  });

const UserInfo = ( props ) => {

    const buttonStyle = {
        width: '100%',
        margin: '5px 5px 0 5px'
      }
  return (
    <>
        <CustomTextField label="First name" name='firstName' value={props.firstName} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="Last name" name='lastName' value={props.lastName} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="Phone" name='phone' value={props.phone} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="Email" name='email' value={props.email} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="Address" name='address' value={props.address} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="City" name='city' value={props.city} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="State" name='state' value={props.state} onChange={props.onChangeForm} variant="filled" />
        <CustomTextField label="Zip" name='zip' value={props.zip} onChange={props.onChangeForm} variant="filled" />
        <Button style={buttonStyle} onClick={props.onUpdate}  variant='outlined' >Update</Button>
        <Button style={buttonStyle} onClick={props.onChangePassword} variant='outlined' >Change password</Button>
    </>
  )
}

export default UserInfo
