import { render } from '@testing-library/react'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

function AccountIconTools(){
    const CustomeIconButton = styled(IconButton)(({ theme }) => ({
        margin: '5px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(196,203,211, 0.2)',
        }
    }));

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log(currentUser)
    };

    const handleLogout = () => {
        logout();
        handleClose();
      };

    const { currentUser , logout } = useAuth();

    return(
        <React.Fragment>
            <Tooltip sx={{marginLeft: 'auto'}} title="Wish list">
                <CustomeIconButton component={Link} to='/wishlist'>
                    <FavoriteBorderOutlinedIcon />
                </CustomeIconButton>
            </Tooltip>
            <Tooltip title="Cart">
                <CustomeIconButton component={Link} to='/cart'>
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </StyledBadge>
                </CustomeIconButton>
            </Tooltip>
            <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{currentUser.username.charAt(0)}</Avatar>
          </IconButton>
        </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
            }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to='/profile' onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                    <Divider />
                <MenuItem onClick={handleLogout} >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default AccountIconTools;