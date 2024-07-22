import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import UserInfo from './UserInfo';
import PurchaseHistory from './PurchaseHistory'
import baseUrl from '../config/baseUrl';
import axios from 'axios';
import { useMessage } from '../alerts/MessageContext'

const Profile = () => {
  const { displayMessage } = useMessage()

  const { currentUser } = useAuth()
  const [renderPurchaseHistory, setRenderPurchaseHistory] = useState(false);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState();
  const [profileData, setProfileData] = useState([{}])
  const [openModal, setOpenModel] = useState(false)

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
        displayMessage("Failed to get profile", "error")
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

  // sending a put request to backend
  const handleUpdateRequest = async () => {
    const url = `${baseUrl}/profile`;

    try{
      await axios.put(url, profileData, {
          headers: { // passing the current user token every time the req is called
            'Authorization': `Bearer ${currentUser.token}`,
          },
      })
      displayMessage("Profile updated", "success")
    }
    catch(error) {
      displayMessage("Failed to update profile", "error")
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
