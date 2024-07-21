import { Box, Button, Grid, Tab, Tabs, TextField, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { styled } from '@mui/material'
import UserInfo from './UserInfo';
import PurchaseHistory from './PurchaseHistory'
import baseUrl from '../config/baseUrl';
import axios from 'axios';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';

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

const Profile = () => {

  const { currentUser } = useAuth()
  const [renderPurchaseHistory, setRenderPurchaseHistory] = useState(false);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState();
  const [profileData, setProfileData] = useState([{}])

  useEffect(()=> {
    if(renderPurchaseHistory){
      setTabValue(1)
    } else {
      setTabValue(0)
    }

  }, [renderPurchaseHistory])

  // get request for the profile
  useEffect(() => {
    const fetchProfile = async () => {
      try{
        const url = `${baseUrl}/profile`;
        const response = await axios.get(url, {
          headers: { // passing the current user token every time the req is called
              'Authorization': `Bearer ${currentUser.token}`,
            },
        })
        setProfileData(response.data)
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetchProfile();// <== calling fetch profile function
  }, [currentUser])

  const handleProfileFormChange = (event) => {
    const { name, value } = event.target; // getting the name & value from the event object
    setProfileData({ // resetting the values of the profileData
      ...profileData,
      [name]:value
    })
  }

  const handleUpdateRequest = async () => {
    const url = `${baseUrl}/profile`;

    try{
      await axios.put(url, profileData, {
          headers: { // passing the current user token every time the req is called
            'Authorization': `Bearer ${currentUser.token}`,
          },
      })
      console.log("Profile updated successfully")
    }
    catch(error) {
      console.log("Failed to update profile")
    }
  }

  const handleTabChange = (event, newValue) => {
    setRenderPurchaseHistory(newValue === 1)
  }

  // form styles
  const gridStyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif',
  };

  const headerGrid = {
    textAlign: 'center',
    padding: '10px 0 10px 0',
  };

  const containerStyle = {
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    margin: '5px 5px 0 5px'
  }

  return (
      <Grid container style={gridStyle}>
        <Grid style={headerGrid} item xs={12} >
          <h1>Hello {currentUser.username}</h1>
        </Grid>
        <Grid style={{height: '100vh', width: '100%'}} item xs={12} >
          <Box sx={containerStyle} className="container">
            <Box sx={{ width: '100%', marginBottom: 2, display: 'flex', flexDirection: 'column' }}>
                <Tabs
                  onChange={handleTabChange}
                  sx={{width: '100%'}}
                  TabIndicatorProps={{ sx: {backgroundColor: '#063970'}}}
                  textColor='inherit' 
                  value={tabValue}
              >
                <Tab label='Profile' sx={{width: '50%'}} />
                <Tab label='Purchase History' sx={{width: '50%'}} />
              </Tabs>
            </Box>
            {
              renderPurchaseHistory ? (
                 <PurchaseHistory /> 
                 ) : (
                   <UserInfo
                      userId={profileData.userId}
                      firstName={profileData.firstName}
                      lastName={profileData.lastName}
                      phone={profileData.phone}
                      state={profileData.state}
                      city={profileData.city}
                      email={profileData.email}
                      zip={profileData.zip}
                      address={profileData.address}
                      onChangeForm={handleProfileFormChange}
                      onUpdate={handleUpdateRequest}
                    /> 
                   )
            }
          </Box>
        </Grid>
      </Grid>
  )
}

export default Profile
