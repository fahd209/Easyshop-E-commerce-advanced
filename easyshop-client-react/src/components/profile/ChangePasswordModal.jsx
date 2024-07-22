import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper, TextField, styled, useMediaQuery, useTheme } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

const ChangePasswordModal = ( props ) => {

    const [changePasswordInput, setChangePasswordInput] = React.useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const buttonsStyle = {
        display: 'flex',
        justfiyContent: 'space-between'
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChangePasswordInput({
                ...changePasswordInput,
                [name]:value
            }
        )
    }

  return (
    <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.openModel}
            onClose={props.closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={props.openModel}>
            <Box sx={style}>
                <CustomTextField
                    id="username-input"
                    label="Current password"
                    type="input"
                    name='currentPassword'
                    autoComplete="current-password"
                    onChange={handleInputChange}
                    value={changePasswordInput.currentPassword}
                    variant="filled"
                    InputProps={{
                        style: { backgroundColor: '#eaeaea' }
                    }}
                 />
                <CustomTextField
                    id="username-input"
                    label="New password"
                    type="input"
                    name='newPassword'
                    onChange={handleInputChange}
                    value={changePasswordInput.newPassword}
                    autoComplete="current-password"
                    variant="filled"
                    InputProps={{
                        style: { backgroundColor: '#eaeaea' }
                    }}
                 />
                 <CustomTextField
                    id="username-input"
                    label="Confirm new password"
                    type="input"
                    name='confirmPassword'
                    onChange={handleInputChange}
                    value={changePasswordInput.confirmPassword}
                    autoComplete="current-password"
                    variant="filled"
                    InputProps={{
                        style: { backgroundColor: '#eaeaea' }
                    }}
                 />
                 <div style={{
                    display: 'flex',
                    float: 'right',
                    padding: '10px'
                 }} >
                    <Button sx={{marginRight: '10px'}} onClick={props.closeModal} variant='outlined' >Cancel</Button>
                    <Button variant='contained'  >Change</Button>
                 </div>
            </Box>
            </Fade>
        </Modal> 
    </div>
  )
}

export default ChangePasswordModal
