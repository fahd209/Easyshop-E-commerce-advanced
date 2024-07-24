import React, { useEffect, useState } from 'react'
import CartHeader from './CartHeader'
import { Button, Grid, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import CartProductCard from './CartProductCard';
import Checkout from './Checkout';
import baseUrl from '../config/baseUrl'
import axios from 'axios';
import { useAuth } from '../context/AuthContext'
import { useMessage } from '../alerts/MessageContext'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import CheckOutDrawer from './CheckOutDrawer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Cart = () => {
  

  const [cartItemsData, setCartItemsData] = useState([]);
  const [cartData, setCartData] = useState({});

  const { currentUser } = useAuth()
  const { displayMessage } = useMessage()
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);

  // get request for carts
  useEffect(() => {
    const getCart = async () => {
      const url = `${baseUrl}/cart`
      try{
        const response = await axios.get(url, {
          headers: { // passing the current user token every time the req is called
              'Authorization': `Bearer ${currentUser.token}`,
            },
        })
        console.log(response.data)
        if(response.data.items && typeof response.data.items === 'object')
        {
          setCartItemsData(Object.values(response.data.items));
          setCartData(response.data)
        }
      }
      catch(error)
      {
        displayMessage("Failed to load cart", "Error")
      }
    }
    getCart();
  }, [])


  // catching the id of the quantity that's being decreased
  const decrease = (id, quantity) => {
    // mapping through the items list
  }

  // calling a put request with the item id and the quantity 
  const handleChangeQuantity = (id, quantity) => {
    const url = `${baseUrl}/cart/products/${id}`;
    axios.put(url, {}, {
        params: {quantity}, // passing quantity as params
        headers: { 
        'Authorization': `Bearer ${currentUser.token}`,
      },
    })
      .then(response => {
        setCartData(response.data) // setting cartData to the updated cart
        setCartItemsData(Object.values(response.data.items)) // setting cartItemsData to the updated items
      })
      .catch(err => {
        displayMessage("Failed to update item quantity", "Error")
      })
    }

    const handleRemoveItem = (id) => {
      const url = `${baseUrl}/cart/${id}`;
      axios.delete(url, {
          headers: { 
            'Authorization': `Bearer ${currentUser.token}`,
        },
      })
      .then(response => {
        setCartItemsData(Object.values(response.data.items)) // resetting the cart items
        setCartData(response.data) // resetting the cart
      })
      .catch(err => {
        displayMessage("Failed to remove item", "Error")
      })
    }

    const handleClearCart = () => {
      const url = `${baseUrl}/cart`;
      axios.delete(url, {
          headers: { 
            'Authorization': `Bearer ${currentUser.token}`,
        },
      })
      .then(response => {
        setCartData(response.data);
        setCartItemsData(Object.values(response.data.items));
        displayMessage("Cart cleared", "success")

      })
      .catch(err => {
        displayMessage("Failed to clear cart", "Error")
      })
    }

    // drawer functionality
    const handleOpenDrawer = () => {

    }

    const toggleDrawer = () => {
      setOpenDrawer(!openDrawer)
    }

     // grid styles
  const gridSyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif'
    
  }

  const headerGrid = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10vh',
    width: '100%',
    borderBottom: '1px solid white',
    padding: '10px'
  }

  const productGrid = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    borderRight: '1px solid white',

  }

  const checkOutGrid = {
    height: '100vh',
    display: 'flex',
    overflow: 'auto',
    justContent: 'center',
    // alignItems: 'center'
  }

  return (
    <Grid container sx={gridSyle}>
      
      {
        isMedium ? (// Mobile screen
          <>
          <Grid xs={12} sx={headerGrid}>
            <h1>Cart</h1>
            {/* Opens drawer */}
            <div>
              <Tooltip title='Check out' >
                <Button sx={{height: '50px', width: '50px'}} onClick={toggleDrawer}  variant="contained">
                  <ShoppingBasketIcon   />
                </Button>
              </Tooltip>
            </div>
          </Grid>
          <Grid xs={12} sx={productGrid}>
            <CheckOutDrawer
              open={openDrawer}
              onClose={toggleDrawer}
              data={cartItemsData}
              cartData={cartData}
              clearCart={handleClearCart}
             />
                <div className='product-container'>
                {
                  cartItemsData.map((cartItem, index) => (
                    <CartProductCard
                      key={index}
                      id={cartItem.product.productId}
                      name={cartItem.product.name}
                      quantity={cartItem.quantity}
                      price={cartItem.lineTotal}
                      description={cartItem.product.description}

                      // product card decrease and increase function props
                      onDecrease={handleChangeQuantity}
                      onIncrease={handleChangeQuantity}
                      onRemoveItem={handleRemoveItem}
                  />
                  ))
                }
                </div>
              </Grid>
          </>
        ) : (    // desktop screen
          <>
            <Grid xs={12} sx={headerGrid}>
              <CartHeader />
            </Grid>
            <Grid xs={9} sx={productGrid}>
                <div className='product-container'>
                {
                  cartItemsData.map((cartItem, index) => (
                    <CartProductCard
                      key={index}
                      id={cartItem.product.productId}
                      name={cartItem.product.name}
                      quantity={cartItem.quantity}
                      price={cartItem.lineTotal}
                      description={cartItem.product.description}

                      // product card decrease and increase function props
                      onDecrease={handleChangeQuantity}
                      onIncrease={handleChangeQuantity}
                      onRemoveItem={handleRemoveItem}
                  />
                  ))
                }
                </div>
              </Grid>
              <Grid xs={3} sx={checkOutGrid}>
                <Checkout
                  data={cartItemsData}
                  cartData={cartData}
                  onClearCart={handleClearCart}
                />
              </Grid>
            
          </>
        )
      }
      </Grid>
      
  )
}

export default Cart
