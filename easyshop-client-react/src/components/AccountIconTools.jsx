import { render } from '@testing-library/react'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function AccountIconTools(){
    const CustomeIconButton = styled(IconButton)(({ theme }) => ({
        color: '#8ba3c1',
        '&:hover': {
            backgroundColor: 'rgba(196,203,211, 0.2)',
        }
    }));
    render(
        <React.Fragment>
            <Tooltip sx={{marginLeft: 'auto'}} title="Wish list">
                <CustomeIconButton>
                    <FavoriteBorderOutlinedIcon />
                </CustomeIconButton>
            </Tooltip>
            <Tooltip title="Cart">
                <CustomeIconButton>
                    <ShoppingCartOutlinedIcon />
                </CustomeIconButton>
            </Tooltip>
            <Tooltip title="Account">
                <CustomeIconButton>
                    <AccountCircleOutlinedIcon />
                </CustomeIconButton>
            </Tooltip>
        </React.Fragment>
    );
}

export default AccountIconTools;